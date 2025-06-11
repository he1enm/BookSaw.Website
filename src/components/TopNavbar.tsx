import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaBehance,
  FaUser,
  FaClipboard,
  FaSearch,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="hidden sm:block bg-[#f3f2ec] border-b border-[#e0e0e0] py-6 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#555555]">
          {/* Social Links */}
          <div className="mb-2 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="cursor-pointer text-[#555555]">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-[#555555]">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-[#555555]">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer text-[#555555]">
                  <FaBehance />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Elements */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="flex items-center cursor-pointer text-[#555555]"
            >
              <FaUser className="mr-1" />
              <span>Account</span>
            </a>
            <a
              href="#"
              className="flex items-center cursor-pointer text-[#555555]"
            >
              <FaClipboard className="mr-1" />
              <span>Cart: (0 $)</span>
            </a>

            {/* Search */}
            <div className="relative">
              <button className="cursor-pointer text-[#555555] focus:outline-none">
                <FaSearch />
              </button>
              <form className="absolute top-8 right-0 bg-white shadow-md p-2 hidden">
                <input
                  type="search"
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none text-[#555555] placeholder-[#999999]"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
