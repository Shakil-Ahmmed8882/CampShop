import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";


const MainLayout= (): JSX.Element => {
  return (
    <div className="max-w-7xl w-full  mx-auto">
    <Navbar/>
    <Outlet/>
    <p className="bg-primaryColor h-52 w-full">Footer</p>
    </div>
  );
};

export default MainLayout; 