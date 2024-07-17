
import Container from "@/components/shared/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[black] text-white py-20">
     <Container>
     <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-3">
            <h3 className="text-lg font-bold mb-4">Campers Shop</h3>
            <p className="mb-2 text-gray-400 hover:text-primaryColor smooth-transition">123 Campsite Rd, Outdoor Town</p>
            <p className="mb-2 text-gray-400 hover:text-primaryColor smooth-transition">Phone: +123 456 7890</p>
            <p className="text-gray-400">Email: info@campersshop.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primaryColor cursor-pointer smooth-transition text-gray-400">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primaryColor cursor-pointer smooth-transition text-gray-400">Products</Link></li>
              <li><Link to="/faq" className="hover:text-primaryColor cursor-pointer smooth-transition text-gray-400">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primaryColor cursor-pointer smooth-transition text-gray-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="md:flex md:space-x-4">
              <li><a href="#" className="text-gray-400 smooth-transition hover:text-primaryColor cursor-pointer">Facebook</a></li>
              <li><a href="#" className="text-gray-400 smooth-transition hover:text-primaryColor cursor-pointer">Twitter</a></li>
              <li><a href="#" className="text-gray-400 smooth-transition hover:text-primaryColor cursor-pointer">Instagram</a></li>
              <li><a href="#" className="text-gray-400 smooth-transition hover:text-primaryColor cursor-pointer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 md:text-center">
          <p className="text-gray-400 mt-8">&copy; 2024 Campers Shop. All rights reserved.</p>
        </div>
      </div>
     </Container>
    </footer>
  );
};

export default Footer;
