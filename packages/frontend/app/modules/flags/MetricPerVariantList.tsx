import { SelectField } from "~/components/Fields/Select/SelectField";
import { useState } from "react";
import { MetricCard } from "../insights/components/MetricCard";

interface MetricHit {
  metric: string;
  variant: string;
  count: number;
  variantCount?: number;
}

interface VariantEntityProps {
  mHit: MetricHit;
  allMetrics: Array<MetricHit>;
}

const VariantEntity = ({ mHit, allMetrics }: VariantEntityProps) => {
  const [selected, setSelected] = useState("variant");
  const compareWithOptions = [];

  if (mHit.variant) {
    compareWithOptions.push({
      value: "variant",
      label: "Associated variant",
    });
  }

  for (const m of allMetrics) {
    if (m.metric !== mHit.metric) {
      compareWithOptions.push({
        value: m.metric,
        label: m.metric,
      });
    }
  }

  let ratio = "N/A";

  if (selected === "variant") {
    ratio = mHit.variantCount
      ? `${((mHit.count / mHit.variantCount) * 100).toFixed(2)}%`
      : "N/A";
  } else if (selected) {
    const otherMetric = allMetrics.find((m) => m.metric === selected)!;
    ratio = `${((mHit.count / otherMetric.count) * 100).toFixed(2)}%`;
  }

  return (
    <MetricCard
      metric={mHit.metric}
      hit={mHit.count}
      variant={mHit.variant}
      ratio={ratio}
    >
      <SelectField
        name="compare-with"
        label="Compare with"
        defaultValue={"variant"}
        options={compareWithOptions}
        onValueChange={(x) => setSelected(x)}
      />
    </MetricCard>
  );
};

export interface MetricPerVariantListProps {
  items: Array<MetricHit>;
}

export const MetricPerVariantList = ({ items }: MetricPerVariantListProps) => {
  return (
    <div className="flex flex-row gap-4 pt-4 flex-wrap">
      {items.map((mHit) => {
        return (
          <VariantEntity key={mHit.metric} mHit={mHit} allMetrics={items} />
        );
      })}
    </div>
  );
};
