import ShopMenu from "@/components/layout/Navigation/shop/ShopMenu";
import About from "@/components/pages/about/About";
import Cart from "@/components/pages/cart/Cart";
import Checkout from "@/components/pages/chekcout/Checkout";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import ProductDetails from "@/components/pages/products/product-details/ProductDetails";
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
   
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
    name: "Cart",
    path: "cart",
    element: <Cart />,
  },
  {
    name: "Checkout",
    path: "checkout",
    element: <Checkout/>,
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


