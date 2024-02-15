import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    // centraliza os itens ao meio 
    //Front- Designer
    return (<div className='container'>
        <h1>Post Criado </h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
    );
};
export default App;
