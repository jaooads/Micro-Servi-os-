import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState(''); //Verifica o nome do titulo inserido e seta ele
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });   //Faremos uma solicitação para o serviço de posts  para a porta 4000
        setTitle(""); //Para ter certeza que foi enviado o title e caso foi,  ele limpa a areá de seleção
    };

    return (                //Este é um exemplo de uma API
        //Função para sempre que aver uma solicitaçãode entrada no Submit ele busca se a algum valor no title
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input
                        value={title} onChange={e => setTitle(e.target.value)} //Busca o valor de title 
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default PostCreate;