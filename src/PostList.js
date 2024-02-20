import React, { useState, useEffect } from "react";
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({}); //Declarando  //useState() Define o valor inicial em 0, pois estamos
    //o valor de um post
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');   //Localização para o localhost sobre os posts
        console.log(res.data);     
        setPosts(res.data); //Ela está fazendo toda hora solicitações para obter toda a lista de comentários
                            // que não são mais necessários 

        //Definir quando iremos chamar a função
        //Define a função apenas quando a solicitação do Fetch retornar algo;
        //Para ter certeza que pode executar a função apenas quando fetch   for exibido
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    console.log(posts);
    // Array vazio serve para dizer que está função será executada apenas uma vez
    const renderPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />

                </div>
            </div>
        );
    });
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts}
        </div>
    );
}

export default PostList