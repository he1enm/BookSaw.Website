import type { ReactNode } from "react";
import { FaTruck, FaUndoAlt, FaHeadset, FaShieldAlt } from "react-icons/fa";

interface Service {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <FaTruck className="text-[#b99272] w-12 h-12" />,
    title: "Fast Delivery",
    description:
      "Get your favorite books delivered fast and right to your door.",
  },
  {
    id: 2,
    icon: <FaUndoAlt className="text-[#b99272] w-12 h-12" />,
    title: "Easy Returns",
    description: "Not satisfied? Return quickly and hassle-free.",
  },
  {
    id: 3,
    icon: <FaHeadset className="text-[#b99272] w-12 h-12" />,
    title: "Customer Support",
    description: "We're here to help you with any questions or issues.",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-[#b99272] w-12 h-12" />,
    title: "Secure Payment",
    description: "Protected transactions for your complete safety.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f3f2ec] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#3a3a3a]">
          Our Library Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center bg-[#edebe4] rounded-xl shadow-md p-8 text-center transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#3a3a3a]">
                {title}
              </h3>
              <p className="text-[#3a3a3a] text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
