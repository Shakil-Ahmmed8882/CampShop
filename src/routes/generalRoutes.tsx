import About from "@/components/pages/about/About";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import Products from "@/components/pages/products/Products";
import Home from "@/pages/Home";

export const generalPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
  },
  {
    name: "FAQ",
    path: "faq",
    element: <FAQ />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },

];
