import React, { useEffect, useState } from 'react'

const BookDetails = ({ bookId }) => {
    const [book, setBook] = useState(null);

    const checkReturn = (res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Não foi possível realizar a operação');
    }

    useEffect(() => {
        if (bookId){
            fetch(`http://localhost:3000/books/${bookId}`)
                .then((res) => checkReturn(res))
                .then((data) => setBook(data))
                .catch((err) => setBook(null));
        }else{
            setBook(null);
        }
    }, [bookId]);

    return (
        <div>
            <h2>Detalhes do Livro</h2>
            {book ? (
                <div>
                    <p>Título: {book.title}</p>
                    <p>Autor: {book.author}</p>
                </div>
            ) : (
                <p>Nenhum livro encontrado.</p>
            )}
        </div>
    );
}

export default BookDetails;