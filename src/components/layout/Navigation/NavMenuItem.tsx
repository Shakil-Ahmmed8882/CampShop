
import {
  NavigationMenuItem as BaseNavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface NavigationMenuItemProps {
  triggerText: string;
  linkHref: string;
  linkText: string;
  children?: React.ReactNode;
}

const NavMenuItem: React.FC<NavigationMenuItemProps> = ({ triggerText, children }) => {
  return (
    <BaseNavigationMenuItem>
      <NavigationMenuTrigger>{triggerText}</NavigationMenuTrigger>
      <NavigationMenuContent >
        <div className=" p-8 border-none">{children}</div>
      </NavigationMenuContent>
    </BaseNavigationMenuItem>
  );
};

export default NavMenuItem;
