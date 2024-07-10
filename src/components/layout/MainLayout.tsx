import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./footer/Footer";


const MainLayout= (): JSX.Element => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default MainLayout; 