import { useState, useEffect } from "react";
import axios from "axios";
import type { Book } from "../Models/Book";

export function useBooks(query?: string) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // construim URL-ul în funcție de query
    const url = query
      ? `/api/books/search?query=${encodeURIComponent(query)}`
      : "/api/books";

    axios
      .get(url)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Eroare la API: " + err.message);
        setLoading(false);
      });
  }, [query]); // depinde de query - refetch la schimbarea lui

  return { books, loading, error };
}
