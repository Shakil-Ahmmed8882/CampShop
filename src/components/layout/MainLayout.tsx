import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./footer/Footer";
import { ToastProvider } from "../ui/toast";
import { Toaster } from "../ui/toaster";


const MainLayout= (): JSX.Element => {
  return (
    <>
    <ToastProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Toaster/>
    </ToastProvider>
    </>
  );
};

export default MainLayout; 