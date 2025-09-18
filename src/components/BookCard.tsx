import type { FC } from "react";
import type { Book } from "../types/Book";
import { Link } from "react-router-dom";


type BookCardProps = {
    book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <img src={book.imageUrl} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
