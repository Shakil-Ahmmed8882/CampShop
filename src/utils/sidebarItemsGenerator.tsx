import { NavLink } from "react-router-dom";
import { TUserPath, TSidebarItem } from "../types";

export const sidebarItemsGenerator = (
  items: TUserPath[],
  role: string
): TSidebarItem[] => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children
          .filter((child) => child.name) // Filter out children without a name
          .map((child) => ({
            key: child.name!,
            label: (
              <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            ),
          })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
