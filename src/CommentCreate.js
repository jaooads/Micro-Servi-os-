import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState("");   //Quando enviado ele limpa a caixa de texto 


    const onSubmit = async (event) => {
        event.preventDefault(); //Passa um evento na condição para saber que esta acontecendo um evento

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });

        setContent("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Novo Comentário</label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default CommentCreate;
