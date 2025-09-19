import { useNavigate, useParams } from "react-router-dom";
import "./BookDetail.scss";
import { books } from "../../data/books";
import { useEffect } from "react";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((book) => book.id === id);

  useEffect(() => {
    if (!book) {
      navigate("/not-found", { replace: true });
    }
  }, [book, navigate]);

  if (!book) return null;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <div className="book-content">
        <img src={book.imageUrl} alt={book.title} />
        <div className="book-info">
          <p><strong>Author: </strong> {book.author}</p>
          <p><strong>Descriprion: </strong>{book.description}</p>
          <p><strong>Publisher: </strong>{book.publisher}</p>
          <p><strong>Year of publication: </strong>{book.year}</p>
          <p><strong>Pages: </strong>{book.pages}</p>
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail
