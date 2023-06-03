import React from 'react';

const BookList = ({ books }) => {
    return (
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;