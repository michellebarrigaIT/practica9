import { useParams, useNavigate } from "react-router-dom";
import "./BookDetail.scss";
import { books } from "../../data/books";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  if (!book) {
    navigate("/not-found", { replace: true });
    return null;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail