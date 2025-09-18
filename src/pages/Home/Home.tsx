import { Link } from "react-router-dom";
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Book Management App </h1>
      <button><Link to="/books">Go to Books</Link></button>
    </div>
  )
}

export default Home;
