import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleSearch = () => {
    if (open && query.trim() !== "") {
      // Dacă e deschis și are query, facem redirect
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    } else {
      // Deschidem bara de search
      setOpen(!open);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSearch}
        className="cursor-pointer text-[#555555] focus:outline-none"
        aria-label="Toggle search bar"
      >
        <FaSearch />
      </button>

      {open && (
        <form
          onSubmit={onSubmit}
          className="absolute z-10 top-8 right-0 bg-white shadow-md p-2 flex"
        >
          <input
            type="search"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none text-[#555555] placeholder-[#999999]"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}
