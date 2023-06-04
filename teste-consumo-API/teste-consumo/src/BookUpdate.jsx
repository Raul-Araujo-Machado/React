import React, { useState } from "react";

const BookUpdate = ({ onBookUpdate }) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(title.trim() === "" || author.trim() === ""){
            return;
        }
        const newBook = {
            id: id.trim(),
            title: title.trim(),
            author: author.trim()
        }
        console.log('idnewbook: ' + newBook);
        console.log('fid:' + id); 

        try {
            onBookUpdate(newBook);
            setId("");
            setTitle("");
            setAuthor("");
        } catch (error) {
            console.error("Erro ao atualizar o livro:", error);
        };
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