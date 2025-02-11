import { ActionFunction, redirect, V2_MetaFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { ErrorBox } from "~/components/Boxes/ErrorBox";
import { H1Logo } from "~/components/H1Logo";
import { Spacer } from "~/components/Spacer";
import { Stack } from "~/components/Stack";
import { Typography } from "~/components/Typography";
import { NotAuthenticatedLayout } from "~/layouts/NotAuthenticatedLayout";
import { AuthCredentials } from "~/modules/auth/types";
import {
  registerAction,
  RegisterForm,
} from "~/modules/user/components/RegisterForm";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Progressively | Welcome",
    },
  ];
};

interface ActionData {
  errors?: Partial<AuthCredentials & { badUser: string }>;
}

export const action: ActionFunction = async ({
  request,
}): Promise<ActionData | Response> => {
  const data: ActionData = await registerAction({ request });

  if (data?.errors) {
    return data;
  }

  return redirect("/signin?userCreated=true");
};

export default function WelcomePage() {
  const data = useActionData<ActionData>();
  const errors = data?.errors;

  return (
    <NotAuthenticatedLayout
      size="S"
      status={
        errors && Object.keys(errors).length > 0 && <ErrorBox list={errors} />
      }
    >
      <Stack spacing={4}>
        <div className="text-center motion-safe:animate-fade-enter-top">
          <H1Logo>Congratulations</H1Logo>
          <Spacer size={2} />
          <Typography>
            {`You've`} successfully run your Progressively instance. {`It's`}{" "}
            time to create <strong>your admin user.</strong>
          </Typography>
        </div>

        <Spacer size={2} />

        <div
          className="motion-safe:animate-fade-enter-bottom motion-safe:opacity-0"
          style={{
            animationDelay: "500ms",
          }}
        >
          <RegisterForm errors={errors} actionLabel="Create my admin user" />
        </div>
      </Stack>
    </NotAuthenticatedLayout>
  );
}
