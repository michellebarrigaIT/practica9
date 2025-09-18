import BookCard from "../../components/BookCard/BookCard"
import { books } from "../../data/books"
import "./Books.scss"

function Books() {
  return (
    <div className="books">
      <h2>Book List</h2>
      <div className="books-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Books