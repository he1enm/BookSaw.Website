interface BookCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  oldPrice?: string;
  category?: string[];
}

export default function BookCard({
  image,
  title,
  author,
  price,
  oldPrice,
}: BookCardProps) {
  return (
    <div className="text-center">
      {/* Container imagine + buton */}
      <div className="bg-[#efeee8] p-4 relative group">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] object-cover"
        />

        {/* Buton Add to Cart în imagine */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button className="w-full bg-black text-white py-2 text-sm font-medium rounded">
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-[#3a3a3a]">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{author}</p>
      <div className="mt-2 flex justify-center items-center gap-2">
        {oldPrice && (
          <span className="text-sm line-through text-gray-400">{oldPrice}</span>
        )}
        <span className="text-[#b99272] text-md font-medium">{price}</span>
      </div>
    </div>
  );
}
