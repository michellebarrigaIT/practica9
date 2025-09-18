import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Books from './pages/Books/Books'
import BookDetail from './pages/BookDetail/BookDetail'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
