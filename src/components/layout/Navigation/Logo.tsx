
import { Link } from "react-router-dom";
import logoImg from '@/assets/brands/fire-logo.png'

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <Link
        to="/"
        className="text-white flex items-center gap-1"
      >
        <img src={logoImg} className="size-9" alt="" />
        <p className="hidden md:flex  font-semibold title-color text-[18px] md:text-[20px]">CampShop</p>
      </Link>
    </div>
  );
};

export default Logo;
