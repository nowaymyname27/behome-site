// file: src/components/site-wide/Hero.tsx
import * as React from "react";

/** Pure layout primitives – no props, no content */
function Root({ children }: { children: React.ReactNode }) {
  return <section className="relative min-h-screen w-full">{children}</section>;
}

function Background({ children }: { children: React.ReactNode }) {
  return <div className="absolute inset-0">{children}</div>;
}

function Scrim({ className = "bg-black/40" }: { className?: string }) {
  return <div className={`absolute inset-0 ${className}`} />;
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="relative section h-full">{children}</div>;
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
      {children}
    </div>
  );
}

function Copy({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl text-white text-center mx-auto lg:text-left lg:mx-0">
      {children}
    </div>
  );
}

function PromoDesktop({ children }: { children: React.ReactNode }) {
  return <div className="hidden lg:block">{children}</div>;
}

function PromoMobile({ children }: { children: React.ReactNode }) {
  return <div className="lg:hidden pb-8">{children}</div>;
}

const Hero = Object.assign(Root, {
  Background,
  Scrim,
  Container,
  Grid,
  Copy,
  PromoDesktop,
  PromoMobile,
});

export default Hero;
