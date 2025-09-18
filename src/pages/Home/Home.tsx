import { Link } from "react-router-dom";
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Book Management App </h1>
      <Link to="/books" className="btn">
        Go to Books
      </Link>
    </div>
  )
}

export default Home;
