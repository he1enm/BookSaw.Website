import { useState, useEffect } from "react";
import axios from "axios";
import type { Book } from "../Models/Book";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })

      .catch((err) => {
        setError("Eroare la API: " + err.message);
        setLoading(false);
      });
  }, []);

  return { books, loading, error };
}
