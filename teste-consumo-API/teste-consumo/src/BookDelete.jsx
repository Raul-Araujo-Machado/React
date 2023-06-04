import React , { useState } from "react";

const BookDelete = ({ onDeleteBook }) => {
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(id.trim() === ""){
            return;
        }

        onDeleteBook(id.trim());
        setId("");
}

    return (
        <div>
            <h2>Deletar Livro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="iddelete">ID:</label>
                <input
                    type="text"
                    id="iddelete"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                {console.log('id:' + id)}
                <button type="submit">Deletar</button>
            </form>
        </div>
    );
}

export default BookDelete;