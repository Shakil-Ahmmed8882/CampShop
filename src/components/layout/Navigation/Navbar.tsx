import { NavigationMenu } from "@/components/ui/navigation-menu";

import NavMenuList from "./NavMenuList";
import NavMenuItem from "./NavMenuItem";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShopMenu from "./shop/ShopMenu";
import Container from "@/components/shared/Container";

const Navbar = (): JSX.Element => {
  return (
    <Container py="py-auto">
    <div className="flex justify-between relative  items-center p-4 z-50">
      <Logo />
      <NavigationMenu>
        <NavMenuList>
          <NavLink to="/">Home</NavLink>
          <ShopMenu/>
          <NavLink className={'text-[#F8FAFC] px-5 py-2 rounded-lg'} to="/products">Products</NavLink>
          <NavLink className={'text-[#F8FAFC] px-5 py-2 rounded-lg'} to="/about">About</NavLink>
          <NavLink className={'text-[#F8FAFC] px-5 py-2 rounded-lg'} to="/faq">FAQ</NavLink>
          <NavLink className={'text-[#F8FAFC] px-5 py-2 rounded-lg'} to="/user/dashboard">Dashboard</NavLink>
          <Button className="bg-primary-gradient ">Login</Button>
        </NavMenuList>
      </NavigationMenu>
    </div>
    </Container>
  );
};

export default Navbar;
