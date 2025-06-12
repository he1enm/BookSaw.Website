import img1 from "../assets/img/main-logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f3f2ec] text-[#555555] text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-300">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={img1} alt="Logo" className="h-10 mb-4" />
          </div>

          {/* About Us */}
          <div>
            <h5 className="font-semibold mb-4 uppercase">About Us</h5>
            <ul className="space-y-2">
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Service Terms</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h5 className="font-semibold mb-4 uppercase">Discover</h5>
            <ul className="space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
              <li>
                <a href="#">Subjects</a>
              </li>
              <li>
                <a href="#">Advanced Search</a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h5 className="font-semibold mb-4 uppercase">My Account</h5>
            <ul className="space-y-2">
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">View Cart</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">Track My Order</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-semibold mb-4 uppercase">Help</h5>
            <ul className="space-y-2">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Report a Problem</a>
              </li>
              <li>
                <a href="#">Suggesting Edits</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
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
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
