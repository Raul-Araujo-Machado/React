import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import BookDetails from './BookDetails'
import BookForm from './BookForm'
import BookUpdate from './BookUpdate'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [bookId, setBookId] = useState('')
  const [bookUpdate, setBookUpdate] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [confirmUpdate, setConfirmUpdate] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const updateOk = (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Não foi possível realizar a operação: ' + res.status + ' ' + res.statusText);
  }

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

  const handleBookUpdate = (newBook) => {
    console.log('id antes do fetch:' + newBook['id']);
    const bookData = { id: newBook['id'], ...newBook };
    
    fetch(`http://localhost:3000/books/${newBook['id']}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => updateOk(res))
      .then((data) => {
        setConfirmUpdate('Livro atualizado com sucesso!');
      })
      .catch((err) => setConfirmUpdate('Não foi possível atualizar o livro: ' + err.message))
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
        <BookUpdate fidUpdate={setBookUpdate} onBookUpdate={handleBookUpdate} />
        <p>{confirmUpdate}</p>
      </div>
    </>
  );
}

export default App
