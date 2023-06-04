import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetails from './BookDetails'
import BookForm from './BookForm'
import BookUpdate from './BookUpdate'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [bookId, setBookId] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [confirmUpdate, setConfirmUpdate] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  const handleBookSubmit = (newBook) => {
    fetch('http://localhost:3000/books' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks([...books, data]);
        setConfirmation('Livro adicionado com sucesso!');
      })
      .catch((err) => setConfirmation('Não foi possível adicionar o livro!'))
  }

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
        <BookForm onBookSubmit={handleBookSubmit} />
        <p>{confirmation}</p>
        <BookUpdate onBookUpdate={setConfirmUpdate} />
        <p>{confirmUpdate}</p>
      </div>
    </>
  );
}

export default App
