import React, { useState, useEffect } from "react";
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []); // [] Serve para chamar o evento apenas uma unica vez

    const renderedComments = comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>; //Retorna o conteudo de um comentario
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;  