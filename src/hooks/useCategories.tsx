import type { Category } from "../Models/Category";
import { useState, useEffect } from "react";
import axios from "axios";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get<Category[]>("/api/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Eroare la API: " + err.message);
        setLoading(false);
      });
  }, []);

  return { categories, loading, error };
}
