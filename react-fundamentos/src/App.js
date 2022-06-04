import React from "react";
import Post from "./Post";


function App() {
  return (
    <>
      <h1>JStack's Blog {console.log('log de dentro do JSX')}</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia"
        }}
      />
      <Post
        likes={10}
        post={{
          title:"Título da notícia 02",
          subtitle:"Subtítulo da notícia"
        }}
      />
      <Post
        likes={50}
        post={{
          title:"Título da notícia 03",
          subtitle:"Subtítulo da notícia"
        }}
      />

    </>

  )
}

export default App;