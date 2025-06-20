import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaBehance,
  FaUser,
  FaClipboard,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const TopNavbar = () => {
  return (
    <div className="hidden sm:block bg-[#f3f2ec] border-b border-[#e0e0e0] py-6 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#555555]">
          <div className="mb-2 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="https://www.facebook.com/"
                  className="cursor-pointer text-[#555555]"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/"
                  className="cursor-pointer text-[#555555]"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/"
                  className="cursor-pointer text-[#555555]"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/"
                  className="cursor-pointer text-[#555555]"
                >
                  <FaBehance />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/notfound"
              className="flex items-center cursor-pointer text-[#555555]"
            >
              <FaUser className="mr-1" />
              <span>Account</span>
            </Link>

            <Link
              to="/notfound"
              className="flex items-center cursor-pointer text-[#555555]"
            >
              <FaClipboard className="mr-1" />
              <span>Cart: (0 $)</span>
            </Link>

            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
