const ContactDetails = () => {
  return (
    <div className="bg-[#edebe4] py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-serif text-gray-900 mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 tracking-wide mb-1">
                Address
              </h3>
              <p className="border-l-4 border-[#b99272] pl-4">
                1234 Main Street,
                <br />
                London, UK, NW1 2AB
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 tracking-wide mb-1">
                Phone
              </h3>
              <p className="border-l-4 border-[#b99272] pl-4">
                +44 20 7946 0958
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 tracking-wide mb-1">
                Email
              </h3>
              <p className="border-l-4 border-[#b99272] pl-4">
                contact@yourcompany.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 tracking-wide mb-1">
                Working Hours
              </h3>
              <p className="border-l-4 border-[#b99272] pl-4">
                Monday – Friday: 9:00 AM – 6:00 PM
                <br />
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[480px] shadow-lg rounded overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19857.74455830063!2d-0.14063467015979907!3d51.51561738539827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3331a73c21%3A0xc7358c02a70f9c5d!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1621249800000!5m2!1sen!2suk"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
