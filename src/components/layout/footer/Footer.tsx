
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Campers Shop</h3>
            <p className="mb-2">123 Campsite Rd, Outdoor Town</p>
            <p className="mb-2">Phone: +123 456 7890</p>
            <p>Email: info@campersshop.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
              <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2024 Campers Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
