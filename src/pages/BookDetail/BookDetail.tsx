import { useParams } from "react-router-dom";
import "./BookDetail.scss";
import { books } from "../../data/books";

function BookDetail() {
  const { id } = useParams<{ id: string }>();

  const book = books.find((b) => b.id === id);

  if (!book) {
     return (
        <div className="book-detail">
          <h2>Book Not Found</h2>
        </div>
  );
  }

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