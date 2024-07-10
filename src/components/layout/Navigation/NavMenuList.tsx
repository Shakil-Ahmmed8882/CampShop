
import {
  NavigationMenuList as BaseNavigationMenuList,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface NavigationMenuListProps {
  children: React.ReactNode;
}

const NavMenuList: React.FC<NavigationMenuListProps> = ({ children }) => {
  return (
    <BaseNavigationMenuList className="flex space-x-4 ">
      {children}
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </BaseNavigationMenuList>
  );
};

export default NavMenuList;
