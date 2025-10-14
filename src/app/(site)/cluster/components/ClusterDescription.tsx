// file: src/app/(site)/cluster/components/ClusterDescription.tsx
import InvestmentDescription from "../../../../components/site-wide/InvestmentDescription";

export default function ClusterDescription() {
  return (
    <InvestmentDescription
      heading={<h2 className="h2">How the Cluster Works</h2>}
      body={
        <div className="space-y-6">
          <p>
            Our Cluster Home investments are designed to provide stable,
            diversified exposure to residential real estate without the
            operational burden of managing individual properties. Each cluster
            includes a small group of newly constructed homes in the same
            neighborhood—professionally leased, maintained, and overseen by our
            on-the-ground property management team.
          </p>
          <p>
            By pooling several homes together, investors benefit from shared
            costs, consistent maintenance standards, and reliable cash flow
            performance across multiple units. Returns are generated through a
            mix of quarterly rental distributions and long-term appreciation
            once the properties are stabilized and sold.
          </p>
          <p className="muted">
            In short, the Cluster model combines the steady income potential of
            rental housing with the scalability and convenience of a managed
            investment structure.
          </p>
        </div>
      }
      items={[
        { title: "123 Oak Grove Ct, Sarasota, FL" },
        { title: "127 Oak Grove Ct, Sarasota, FL" },
        { title: "131 Oak Grove Ct, Sarasota, FL" },
        { title: "135 Oak Grove Ct, Sarasota, FL" },
      ]}
      align="center"
    />
  );
}
