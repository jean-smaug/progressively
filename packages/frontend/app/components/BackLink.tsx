import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Button } from "./Buttons/Button";

export interface BackLinkProps {
  children: React.ReactNode;
  to: string;
}

export const BackLink = ({ children, to }: BackLinkProps) => {
  return (
    <Button to={to} icon={<HiOutlineArrowNarrowLeft aria-hidden />}>
      {children}
    </Button>
  );
};
