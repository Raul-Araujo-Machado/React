import React, { useState } from "react";

const BookUpdate = ({ onBookUpdate }) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(title.trim() === "" || author.trim() === ""){
            return;
        }
        const newBook = {
            title: title.trim(),
            author: author.trim()
        }

        const res = await fetch(`http://localhost:3000/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
        if(res.ok){
            onBookUpdate('Livro atualizado com sucesso!');
            setId("");
            setTitle("");
            setAuthor("");
        }
    }

    return (
        <div>
            <h2>Atualizar Livro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idput">ID:</label>
                <input
                    type="text"
                    id="idput"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <label htmlFor="titleput">Título:</label>
                <input
                    type="text"
                    id="titleput"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="authorput">Autor:</label>
                <input
                    type="text"
                    id="authorput"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {console.log('id:' + id)}
                {console.log('titulo:' + title)}
                {console.log('autor:' + author)}
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default BookUpdate;