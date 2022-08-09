import { DeleteButton } from "~/components/Buttons/DeleteButton";
import { Card, CardContent } from "~/components/Card";
import { Spacer } from "~/components/Spacer";
import { Typography } from "~/components/Typography";
import { Li, Ul } from "~/components/Ul";
import { VisuallyHidden } from "~/components/VisuallyHidden";
import { styled } from "~/stitches.config";
import { ComparatorEnum, StrategyRetrieveDTO } from "../types";

const WrapperUl = styled(Ul, {
  color: "$hades",
});

const ActionWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});

export interface StrategyCardProps {
  flagId: string;
  projectId: string;
  envId: string;
  strat: StrategyRetrieveDTO;
}

const mapStrategyComparator = (comparatorEnum: ComparatorEnum) => {
  switch (comparatorEnum) {
    default:
    case ComparatorEnum.Equals: {
      return "equals";
    }

    case ComparatorEnum.NotEquals: {
      return "does not equal";
    }
  }
};

const StrategyAudience = ({ strat }: { strat: StrategyRetrieveDTO }) => {
  let targetedUsers = "all the people";
  let fieldName = undefined;

  if (strat.activationType === "percentage") {
    targetedUsers = `${strat.rolloutPercentage}% of the people`;
  }

  if (strat.strategyRuleType === "field") {
    fieldName = strat.fieldName;
  }

  return (
    <Typography>
      Serve the flag to <strong>{targetedUsers}</strong>{" "}
      {fieldName ? (
        <span>
          with <strong>email</strong>{" "}
          <strong>
            {mapStrategyComparator(strat.fieldComparator as ComparatorEnum)}
          </strong>{" "}
          <span>to one of:</span>
        </span>
      ) : null}
    </Typography>
  );
};

const StrategyTargetConstraints = ({
  strat,
}: {
  strat: StrategyRetrieveDTO;
}) => {
  if (strat.strategyRuleType === "default") {
    return null;
  }

  if (strat.strategyRuleType === "field") {
    const targets = strat.fieldValue?.split("\n");

    return (
      <WrapperUl>
        {targets?.map((target) => (
          <Li key={target}>{target}</Li>
        ))}
      </WrapperUl>
    );
  }

  return null;
};

export const StrategyCard = ({
  flagId,
  projectId,
  envId,
  strat,
}: StrategyCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography as="h3" id={strat.uuid} font="title">
          {strat.name}
        </Typography>

        <Spacer size={2} />

        <div>
          <StrategyAudience strat={strat} />

          <StrategyTargetConstraints strat={strat} />

          <ActionWrapper>
            <DeleteButton
              to={`/dashboard/projects/${projectId}/environments/${envId}/flags/${flagId}/strategies/${strat.uuid}/delete`}
            >
              Remove<VisuallyHidden> {strat.name}</VisuallyHidden>
            </DeleteButton>
          </ActionWrapper>
        </div>
      </CardContent>
    </Card>
  );
};
