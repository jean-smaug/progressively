import { ButtonCopy } from "~/components/ButtonCopy";
import { CardEntity } from "~/components/Entity/Entity";
import { Environment } from "../types";
import { IconBox } from "~/components/IconBox";
import { EnvIcon } from "~/components/Icons/EnvIcon";

export interface EnvListProps {
  environments: Array<Environment>;
  makeLink: (env: Environment) => string;
}

export const EnvList = ({ environments, makeLink }: EnvListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {environments.map((env) => (
        <li key={env.uuid}>
          <CardEntity
            avatar={
              <IconBox content={env.name}>
                <EnvIcon />
              </IconBox>
            }
            title={env.name}
            link={makeLink(env)}
            actions={
              <div className="hidden md:block">
                <ButtonCopy toCopy={env.clientKey}>{env.clientKey}</ButtonCopy>
              </div>
            }
          />
        </li>
      ))}
    </ul>
  );
};
