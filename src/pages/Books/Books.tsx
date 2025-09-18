import { useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard"
import { books } from "../../data/books"
import "./Books.scss"

function Books() {
  const navigate = useNavigate();
  
  return (
    <div className="books">
      <h2>Book List</h2>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
      </button>
    </div>
  )
}

export default Books