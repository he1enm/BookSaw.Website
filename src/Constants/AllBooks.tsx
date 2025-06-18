import { UseBooks } from "./UseBooks";

export default function AllBooks() {
  const { books, loading, error } = UseBooks();

  if (loading) return <p>Se încarcă cărțile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          {/* etc */}
        </div>
      ))}
    </div>
  );
}
