import { Link } from "react-router-dom";

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <Link to="/" className="text-white">
        {/* <img src="/path/to/logo.png" alt="CampShop Logo" /> */}
        Camp<span className="text-gradient">Shop</span>
      </Link>
    </div>
  );
};

export default Logo;
