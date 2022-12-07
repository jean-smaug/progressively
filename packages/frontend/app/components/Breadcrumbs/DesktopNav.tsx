import { stringToColor } from "~/modules/misc/utils/stringToColor";
import { HStack } from "../HStack";
import { Link } from "../Link";
import { LogoWithoutText } from "../Logo/WithoutText";
import { MenuButton } from "../MenuButton";
import { CrumbIcon } from "./CrumbIcon";
import { Crumbs } from "./types";

export interface DesktopNavProps {
  crumbs: Crumbs;
}

export const DesktopNav = ({ crumbs }: DesktopNavProps) => {
  const lastItemIndex = crumbs.length - 1;

  return (
    <nav aria-label="Breadcrumbs">
      <ol className="flex h-12 items-center">
        <li className="flex items-center">
          <LogoWithoutText aria-label="Progressively" />

          <div className="flex text-gray-300 px-2s" aria-hidden>
            {"/"}
          </div>
        </li>
        {crumbs.map((crumb, index) => {
          const currentPage = index === lastItemIndex;
          const background = crumb.colorize
            ? stringToColor(crumb.label, 90)
            : undefined;
          const color = crumb.colorize
            ? stringToColor(crumb.label, 25)
            : undefined;

          return (
            <li
              key={crumb.link}
              className={
                "flex items-center last-of-type:text-indigo-700 last-of-type:font-bold"
              }
            >
              <Link
                aria-current={currentPage ? "page" : undefined}
                to={crumb.link}
                className="transition-all px-2 -mx-1 py-1 rounded hover:text-black hover:bg-gray-100 active:bg-gray-200 active:text-indigo-700 no-underline text-sm"
              >
                <div
                  className={"rounded px-2 -mx-1 py-1"}
                  style={{ color, background }}
                >
                  <HStack spacing={2}>
                    <CrumbIcon crumb={crumb} color={color} />
                    {crumb.label}
                  </HStack>
                </div>
              </Link>

              {crumb.menuItems ? (
                <MenuButton items={crumb.menuItems} label={crumb.menuLabel!} />
              ) : null}

              {!currentPage && (
                <div className="flex text-gray-300 px-2" aria-hidden>
                  {"/"}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
