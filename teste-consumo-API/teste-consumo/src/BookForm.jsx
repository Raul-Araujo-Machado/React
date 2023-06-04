import React, { useState } from "react";

const BookForm = ({ onBookSubmit}) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id.trim() === '' || title.trim() === '' || author.trim() === ''){
            return;
        }

        const newBook = {id: id.trim(), title: title.trim(), author: author.trim()};
        onBookSubmit(newBook);
        setId('');
        setTitle('');
        setAuthor('');
    }

    return (
        <div>
            <h2>Adicionar novo livro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idpost">ID:</label>
                <input
                    type="text"
                    id="idpost"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <label htmlFor="titlepost">Título:</label>
                <input
                    type="text"
                    id="titlepost"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="authorpost">Autor:</label>
                <input
                    type="text"
                    id="authorpost"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default BookForm;