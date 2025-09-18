import { useNavigate, useParams } from "react-router-dom";
import "./BookDetail.scss";
import { books } from "../../data/books";
import { useEffect } from "react";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  useEffect(() => {
    if (!book) {
      navigate("/not-found", { replace: true });
    }
  }, [book, navigate]);

  if (!book) return null;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <img src={book.imageUrl} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail
