import { FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="bg-[#edebe4] py-20 px-6">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        {/* Left Side - Title */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serif text-gray-900 relative inline-block">
            Subscribe To Our Newsletter
            <span className="block w-10 h-[2px] bg-[#b99272] mt-2"></span>
          </h2>
        </div>

        {/* Right Side - Text & Form */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
            consectetur. Elit adipiscing enim pharetra hac.
          </p>

          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-400 pb-2">
            <input
              type="text"
              name="email"
              placeholder="Enter your email addresss here"
              className="w-full bg-transparent border-none outline-none placeholder:text-gray-500 text-base"
            />
            <button
              type="submit"
              className="flex items-center gap-2 text-sm font-bold text-gray-900"
            >
              SEND <FaPaperPlane className="text-base" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
