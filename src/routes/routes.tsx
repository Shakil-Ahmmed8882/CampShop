import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { userPaths } from "./user.routes";
import Home from "../pages/Home";
import MainLayout from "@/components/layout/MainLayout";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import { generalPaths } from "./generalRoutes";
// import ProtectedRoute from '../components/layout/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(generalPaths)
  },
  {
    path: "/user",
    element: <App />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
