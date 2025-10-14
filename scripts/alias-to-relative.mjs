// scripts/alias-to-relative.mjs
import fs from "node:fs";
import path from "node:path";
import { globby } from "globby";

/**
 * Rewrites import specifiers:
 *  "@/foo/bar"        -> relative to file (src/foo/bar)
 *  "@/sanity/..."     -> relative to file (src/sanity/...)
 *
 * Keeps extensionless specifiers; preserves quotes.
 */

const projectRoot = process.cwd();
const SRC_DIR = path.join(projectRoot, "src");

const ALIASES = [
  { prefix: "@/sanity/", targetDir: path.join(SRC_DIR, "sanity") + path.sep },
  { prefix: "@/", targetDir: SRC_DIR + path.sep },
];

function rewriteSpecifier(fileAbs, spec) {
  for (const { prefix, targetDir } of ALIASES) {
    if (spec.startsWith(prefix)) {
      const rest = spec.slice(prefix.length); // e.g., "lib/foo"
      const absTarget = path.join(targetDir, rest); // absolute disk path
      // compute relative from file's dir to absTarget
      const fromDir = path.dirname(fileAbs);
      let rel = path.relative(fromDir, absTarget).replace(/\\/g, "/");
      if (!rel.startsWith(".")) rel = "./" + rel; // ensure ./ for same dir / child
      return rel;
    }
  }
  return null;
}

function transform(code, fileAbs) {
  // naive but robust enough: handle import/export from "...", require("..."), dynamic import("...")
  // 1) ES imports/exports
  const reES = /(\bfrom\s+|^|\n|\r)\s*(['"])([^'"]+)\2/g;
  // 2) bare imports: import "..."
  const reBare =
    /(\bimport\s*)\((\s*)(['"])([^'"]+)\3(\s*)\)|\bimport\s+(['"])([^'"]+)\6/g;
  // 3) require("...")
  const reReq = /\brequire\(\s*(['"])([^'"]+)\1\s*\)/g;

  let changed = false;

  // replace in "from '...'" and export-from
  code = code.replace(reES, (m, prefix, quote, spec) => {
    const updated = rewriteSpecifier(fileAbs, spec);
    if (updated) {
      changed = true;
      return `${prefix}${quote}${updated}${quote}`;
    }
    return m;
  });

  // replace in dynamic/bare import
  code = code.replace(reBare, (m, kwOrImp, ws1, q1, spec1, ws2, q2, spec2) => {
    const spec = spec1 ?? spec2;
    const quote = q1 ?? q2 ?? '"';
    const updated = rewriteSpecifier(fileAbs, spec);
    if (!updated) return m;
    changed = true;
    if (kwOrImp?.startsWith("import") && q2) {
      // bare import "..."
      return `import ${quote}${updated}${quote}`;
    } else {
      // dynamic import(...)
      return `import(${ws1}${quote}${updated}${quote}${ws2})`;
    }
  });

  // replace in require("...")
  code = code.replace(reReq, (m, quote, spec) => {
    const updated = rewriteSpecifier(fileAbs, spec);
    if (!updated) return m;
    changed = true;
    return `require(${quote}${updated}${quote})`;
  });

  return { code, changed };
}

async function main() {
  const files = await globby([
    "src/**/*.{ts,tsx,js,jsx,mjs,cjs}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/dist/**",
  ]);

  let touched = 0;
  for (const rel of files) {
    const abs = path.join(projectRoot, rel);
    const code = fs.readFileSync(abs, "utf8");
    const { code: out, changed } = transform(code, abs);
    if (changed) {
      fs.writeFileSync(abs, out, "utf8");
      touched++;
      console.log("rewrote:", rel);
    }
  }
  console.log(`Done. Files rewritten: ${touched}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
