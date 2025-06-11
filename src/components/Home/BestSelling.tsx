import bestSellingImg from "../../assets/img/single-image.jpg";

export default function BestSelling() {
  return (
    <section
      id="best-selling"
      className="relative bg-[#edebe4] py-20 px-4 md:px-0"
    >
      <div className="absolute inset-0 bg-[url('/path-to-leaf-pattern.svg')] bg-no-repeat bg-right-top opacity-10 pointer-events-none" />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col md:flex-row">
              {/* Imaginea */}
              <div className="md:w-1/2 flex justify-center">
                <figure className="products-thumb">
                  <img
                    src={bestSellingImg}
                    alt="Birds Gonna Be Happy"
                    className="w-[280px] md:w-[300px] rounded-lg shadow-md"
                  />
                </figure>
              </div>

              {/* Textul */}
              <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 flex items-center">
                <div className="product-entry">
                  <h2 className="text-4xl font-semibold text-[#222] border-b-2 border-[#b99272] inline-block mb-10">
                    Best Selling Book
                  </h2>

                  <div className="products-content space-y-6">
                    <div className="text-[#777] font-medium">
                      By Timbur Hood
                    </div>
                    <h3 className="text-2xl font-semibold text-[#333]">
                      Birds gonna be happy
                    </h3>
                    <p className="text-[#555] leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu feugiat amet, libero ipsum enim pharetra hac.
                    </p>
                    <div className="text-[#b99272] text-2xl font-semibold">
                      $ 45.00
                    </div>
                    <div className="btn-wrap pt-2">
                      <a
                        href="#"
                        className="text-[#000] font-semibold inline-flex items-center gap-2 hover:text-[#b99272] transition"
                      >
                        shop it now <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
