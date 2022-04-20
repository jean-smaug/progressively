import { Link } from "remix";
import { H1 } from "~/components/H1";
import { Main } from "~/components/Main";

export default function ForbiddenPage() {
  return (
    <Main>
      <H1>{`Woops! You're not authorized to see this content`}</H1>
      <p>
        {`It looks you're trying to access this page while not being
          authenticated.`}
      </p>
      <p>
        To access this content, make sure to fill the authentication page form.
      </p>

      <Link to="/signin">Go back to the signin page</Link>
    </Main>
  );
}
