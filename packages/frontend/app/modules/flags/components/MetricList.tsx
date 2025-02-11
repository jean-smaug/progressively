import { ButtonCopy } from "~/components/ButtonCopy";
import { CardEntity } from "~/components/Entity/Entity";
import { MenuButton } from "~/components/MenuButton";
import { Metric } from "../types";
import { VariantDot } from "../../variants/components/VariantDot";

export interface MetricListProps {
  metrics: Array<Metric>;
  projectId: string;
  envId: string;
  flagId: string;
}
export const MetricList = ({
  metrics,
  projectId,
  envId,
  flagId,
}: MetricListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {metrics.map((metric) => (
        <li key={metric.uuid}>
          <CardEntity
            title={metric.name}
            description={
              metric.variant ? (
                <div className="flex flex-row gap-2 items-center">
                  <VariantDot variant={metric.variant.value} />
                  <p>
                    Attached to variant <strong>{metric.variant.value}</strong>
                  </p>
                </div>
              ) : (
                "No variant attached"
              )
            }
            actions={
              <div className="hidden md:block">
                <ButtonCopy toCopy={metric.name}>{metric.name}</ButtonCopy>
              </div>
            }
            menu={
              <MenuButton
                items={[
                  {
                    label: "Remove",
                    href: `/dashboard/projects/${projectId}/environments/${envId}/flags/${flagId}/metrics/${metric.uuid}/delete`,
                  },
                ]}
                label={"Actions on webhook"}
                variant="action"
              />
            }
          />
        </li>
      ))}
    </ul>
  );
};
