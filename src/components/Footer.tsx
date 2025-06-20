import img1 from "../assets/img/main-logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f3f2ec] text-[#555555] text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-300">
          <div className="md:col-span-1">
            <img src={img1} alt="Logo" className="h-10 mb-4" />
          </div>

          <div>
            <h5 className="font-semibold mb-4 uppercase">About Us</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/notfound">Vision</Link>
              </li>
              <li>
                <Link to="/notfound">Articles</Link>
              </li>
              <li>
                <Link to="/notfound">Careers</Link>
              </li>
              <li>
                <Link to="/notfound">Service Terms</Link>
              </li>
              <li>
                <Link to="/notfound">Donate</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 uppercase">Discover</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Books</Link>
              </li>
              <li>
                <Link to="/notfound">Authors</Link>
              </li>
              <li>
                <Link to="/notfound">Subjects</Link>
              </li>
              <li>
                <Link to="/notfound">Advanced Search</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 uppercase">My Account</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/notfound">Sign In</Link>
              </li>
              <li>
                <Link to="/notfound">View Cart</Link>
              </li>
              <li>
                <Link to="/notfound">My Wishlist</Link>
              </li>
              <li>
                <Link to="/notfound">Track My Order</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 uppercase">Help</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/notfound">Help Center</Link>
              </li>
              <li>
                <Link to="/notfound">Report a Problem</Link>
              </li>
              <li>
                <Link to="/notfound">Suggesting Edits</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-xs text-gray-500">
          <p>
            © 2022 All rights reserved. Free HTML Template by{" "}
            <a
              href="https://www.templatesjungle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TemplatesJungle
            </a>
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube />
            </a>
            <a href="https://www.behance.net/">
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
