import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetails from './BookDetails'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [bookId, setBookId] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  return (
    <>
      <div>
        <h1>Meu Projeto React</h1>
        <BookList books={books} />
        <form>
          <label htmlFor="bookId">Digite o ID do Livro:</label>
          <input 
            type="text" 
            id='bookId' 
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </form>
        <BookDetails bookId={bookId} />
      </div>
    </>
  );
}

export default App
