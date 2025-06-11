import deviceImg from "../../assets/img/device.png";
import googlePlay from "../../assets/img/google-play.jpg";
import appStore from "../../assets/img/app-store.jpg";

const DownloadApp = () => {
  return (
    <div className="bg-[#edebe4] py-16 relative overflow-hidden">
      {/* Optional overlays dacă ai nevoie de ele */}
      <div className="absolute inset-0 pointer-events-none leaf-pattern-overlay"></div>
      <div className="absolute inset-0 pointer-events-none corner-pattern-overlay"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
          {/* Image */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <img
              src={deviceImg}
              alt="phone"
              className="max-w-[220px] md:max-w-[250px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl font-semibold text-[#333] mb-4 border-b-2 border-gray-300 inline-block pb-2">
              Download our app now!
            </h2>
            <p className="text-[#555] mb-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              sed ptibus libero lectus non et. Amet sed lorem posuere sit
              iaculis amet, ac urna. Adipiscing fames semper erat ac in
              suspendisse iaculis.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <img src={googlePlay} alt="Google Play" className="h-12" />
              <img src={appStore} alt="App Store" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
