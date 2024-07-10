import { NavigationMenu } from "@/components/ui/navigation-menu";

import NavMenuList from "./NavMenuList";
import NavMenuItem from "./NavMenuItem";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShopMenu from "./shop/ShopMenu";

const Navbar = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-4">
      <Logo />
      <NavigationMenu>
        <NavMenuList>
          <NavLink to="/">Home</NavLink>
          <ShopMenu/>
          <NavLink className={'hover:bg-[#F8FAFC] px-5 py-2 rounded-lg'} to="/contact">Products</NavLink>
          <NavLink className={'hover:bg-[#F8FAFC] px-5 py-2 rounded-lg'} to="/about">About</NavLink>
          <NavLink className={'hover:bg-[#F8FAFC] px-5 py-2 rounded-lg'} to="/faq">FAQ</NavLink>
          <NavLink className={'hover:bg-[#F8FAFC] px-5 py-2 rounded-lg'} to="/user/dashboard">Dashboard</NavLink>
          <Button className="bg-primaryColor ">Login</Button>
        </NavMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
