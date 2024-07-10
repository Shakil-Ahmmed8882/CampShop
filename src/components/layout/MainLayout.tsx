import { Outlet } from "react-router-dom";


const MainLayout= (): JSX.Element => {
  return (
    <>
    <p>Navbar</p>
    <Outlet/>
    <p>Footer</p>
    </>
  );
};

export default MainLayout; 