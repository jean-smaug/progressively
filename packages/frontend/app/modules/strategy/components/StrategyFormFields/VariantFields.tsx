import { PercentageField } from "~/components/Fields/PercentageField";
import { Variant } from "~/modules/variants/types";

export interface VariantFieldsProps {
  variants: Array<Variant & { rolloutPercentage: number }>;
}

export const VariantFields = ({ variants }: VariantFieldsProps) => {
  return (
    <div className="flex flex-row gap-x-8 flex-wrap">
      {variants.map((variant) => {
        return (
          <div key={variant.uuid}>
            <input type="hidden" name="variantUuid" value={variant.uuid} />
            <PercentageField
              name={"variantRolloutPercentage"}
              initialValue={variant.rolloutPercentage}
              label={variant.value}
            />
          </div>
        );
      })}
    </div>
  );
};
