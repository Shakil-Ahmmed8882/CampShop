import { CartIcon } from "@/assets/icons/Icons";
import ShopMenu from "@/components/layout/Navigation/shop/ShopMenu";
import About from "@/components/pages/about/About";
import Cart from "@/components/pages/cart/Cart";
import Checkout from "@/components/pages/chekcout/Checkout";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import ProductDetails from "@/components/pages/products/product-details/ProductDetails";
import Products from "@/components/pages/products/Products";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Home from "@/pages/Home";
import SuccessDelevary from "@/pages/SuccessDelevary";

export const generalPaths = [
  {
    name: "Home",
    path: "/shop",
    element: <Home />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
  },
  {
    name: <CartIcon/>,
    path: "cart",
    element: <Cart />,
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
  //-----------------
  {
   
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
   
    path: "success",
    element: <SuccessDelevary />,
  },
];


