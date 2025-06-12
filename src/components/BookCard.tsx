interface BookCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  oldPrice?: string; // opțional
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
      <div className="bg-[#efeee8] p-4">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] object-cover"
        />
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
