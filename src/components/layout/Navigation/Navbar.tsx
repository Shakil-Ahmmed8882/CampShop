import { NavigationMenu } from "@/components/ui/navigation-menu";
import NavMenuList from "./NavMenuList";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { generalPaths } from "@/routes/generalRoutes";
import ShopMenu from "./shop/ShopMenu";

const Navbar = (): JSX.Element => {
  return (
    <Container py="py-auto">
    <div className="flex justify-between relative  items-center p-4 z-50">
      <Logo />
      <NavigationMenu>

        {/* Route list */}
        <NavMenuList>          
          <ShopMenu/>
          {generalPaths.map(route => (
            route.name && <NavLink key={route?.path} className={'text-[#F8FAFC] px-5 py-2 rounded-lg'} to={`${route.path}`}>{route.name}</NavLink>
          ))}
          <Button className="bg-primary-gradient ">Login</Button>
        </NavMenuList>
      </NavigationMenu>
    </div>
    </Container>
  );
};

export default Navbar;
