import { Link } from "react-router-dom";
import NavMenuItem from "../NavMenuItem";

const ShopMenu = (): JSX.Element => {
  return (
    <NavMenuItem
    triggerText="Shop" linkHref="/shop" linkText="Shop">
        <div className="flex gap-5">
        <div className="flex-1 w-[200px] h-full bg-[white] p-3 rounded-lg"></div>
      <div className="flex flex-1 gap-8">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Clothing</h3>
          <Link to="/shop/clothing/mens">Men's</Link>
          <Link to="/shop/clothing/womens">Women's</Link>
          <Link to="/shop/clothing/kids">Kids'</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Footwear</h3>
          <Link to="/shop/footwear/sneakers">Sneakers</Link>
          <Link to="/shop/footwear/boots">Boots</Link>
          <Link to="/shop/footwear/sandals">Sandals</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Accessories</h3>
          <Link to="/shop/accessories/bags">Bags</Link>
          <Link to="/shop/accessories/hats">Hats</Link>
          <Link to="/shop/accessories/jewelry">Jewelry</Link>
        </div>
        {/* <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Special Collections</h3>
          <Link to="/shop/special/summer">Summer Essentials</Link>
          <Link to="/shop/special/winter">Winter Wear</Link>
          <Link to="/shop/special/new-arrivals">New Arrivals</Link>
        </div> */}
        
      </div>
        </div>
    </NavMenuItem>
  );
};

export default ShopMenu;