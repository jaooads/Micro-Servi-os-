import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState(''); 

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!title.trim()) {  // Verifica se o título está vazio ou contém apenas espaços em branco
            alert("Por favor insira um título para seu post");
            return;  // Impede que o código abaixo seja executado se o título estiver vazio
        }

        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle("");
        window.location.reload();  // Recarrega a página após o envio do post
    };

    return (                
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Título</label>
                    <input
                        value={title} onChange={e => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default PostCreate;
