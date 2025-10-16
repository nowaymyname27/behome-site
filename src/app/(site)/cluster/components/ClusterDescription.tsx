// file: src/app/(site)/cluster/components/ClusterDescription.tsx
"use client";

import InvestmentDescription from "../../../../components/site-wide/InvestmentDescription";
import { useLocale } from "../../../../i18n/locale-context";
import { tClusterDescription } from "../i18n";

export default function ClusterDescription() {
  const { locale } = useLocale();
  const i = tClusterDescription(locale);

  return (
    <InvestmentDescription
      heading={<h2 className="h2">{i.heading}</h2>}
      body={
        <div className="space-y-6">
          <p>{i.body.p1}</p>
          <p>{i.body.p2}</p>
          <p className="muted">{i.body.p3Muted}</p>
        </div>
      }
      items={i.items}
      align="center"
    />
  );
}
