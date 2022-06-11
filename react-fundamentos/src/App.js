import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false,
    },
    {
      id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true,
    },
    {
      id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false,
    },
    {
      id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 60, read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemovePost(postId) {
    console.log({ postId });
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </>

  );
}

export default App;
