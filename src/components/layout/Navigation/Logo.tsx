import { Link } from "react-router-dom";

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/path/to/logo.png" alt="CampShop Logo" />
      </Link>
    </div>
  );
};

export default Logo;
