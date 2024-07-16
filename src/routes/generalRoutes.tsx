import { CartIcon } from "@/assets/icons/Icons";
import About from "@/components/pages/about/About";
import Cart from "@/components/pages/cart/Cart";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import ProductDetails from "@/components/pages/products/product-details/ProductDetails";
import Products from "@/components/pages/products/Products";
import ProductList from "@/pages/admin/Product-management/ManageProduct";
import Home from "@/pages/Home";
import SuccessDelevary from "@/pages/SuccessDelevary";

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
  {
    name: "Manage product",
    path: "manage-product",
    element: <ProductList />,
  },
  //-----------------
  {
   name:'',
    path: "products/:id",
    element: <ProductDetails />,
  },
  {
    name:'',
    path: "success",
    element: <SuccessDelevary />,
  },
];


