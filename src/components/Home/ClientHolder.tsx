import client1 from "../../assets/img/client-image1.png";
import client2 from "../../assets/img/client-image2.png";
import client3 from "../../assets/img/client-image3.png";
import client4 from "../../assets/img/client-image4.png";
import client5 from "../../assets/img/client-image5.png";

const clientImages = [client1, client2, client3, client4, client5];

export default function ClientLogos() {
  return (
    <section
      id="client-holder"
      className="bg-[#edebe4] py-16 px-8 md:px-16 hidden md:block"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
          {clientImages.map((img, index) => (
            <a key={index} href="#">
              <img
                src={img}
                alt={`client-${index + 1}`}
                className="w-full max-h-24 object-contain hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
