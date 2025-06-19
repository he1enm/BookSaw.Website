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
              {/* Container imagine cu poziționare relativă */}
              <div className="md:w-1/2 flex justify-center relative">
                <figure className="products-thumb relative">
                  <img
                    src="https://img.wattpad.com/cover/396182664-256-k26147.jpg"
                    alt="The Quiet Fight For Love"
                    className="w-[280px] md:w-[300px] object-cover rounded-tr-3xl rounded-br-3xl shadow-md"
                  />
                  {/* Dreptunghi semi-transparent cu blur, puțin distanțat de marginea imaginii */}
                  <div className="absolute top-0 bottom-0 left-2 w-6 bg-black/30 blur-sm pointer-events-none rounded-none" />
                </figure>
              </div>

              <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 flex items-center">
                <div className="product-entry">
                  <h2 className="text-4xl font-semibold text-[#222] border-b-2 border-[#b99272] inline-block mb-10">
                    Best Selling Book
                  </h2>

                  <div className="products-content space-y-6">
                    <div className="text-[#777] font-medium">
                      By Jordan Gray
                    </div>
                    <h3 className="text-2xl font-semibold text-[#333]">
                      The Quiet Fight For Love
                    </h3>
                    <p className="text-[#555] leading-relaxed">
                      'The Quiet Fight For Love' is an unforgettable exploration
                      of identity, memory, and the silent battles we fight
                      within ourselves.
                    </p>
                    <div className="text-[#b99272] text-2xl font-semibold flex items-center gap-2">
                      <span>$17.67</span>
                      <span className="line-through text-sm text-gray-400">
                        $28.81
                      </span>
                    </div>
                    <div className="btn-wrap pt-2">
                      <a
                        href="/book/227a46df-8e1e-45ee-b421-bc507350bdb6"
                        className="text-[#000] font-semibold inline-flex items-center gap-2 hover:text-[#b99272] transition"
                      >
                        shop it now <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
