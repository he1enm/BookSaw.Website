import managerImg from "../../assets/img/aboutus.jpg";

const WhyUs = () => {
  return (
    <section className="w-full py-12 bg-[#edebe4]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Text section */}
        <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
          <h3 className="text-lg text-gray-600 mb-2 md:py-20">
            Nina Perry, Manager
          </h3>
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Why Us</h2>
          <div className="w-16 h-1 bg-[#b99272] mb-6 mx-auto md:mx-0" />
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={managerImg}
            alt="Manager"
            className="max-w-md w-full rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
