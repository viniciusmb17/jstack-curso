import React from "react";

const category = 'Posts da semana';

function App() {
  return (
    <>
      <h1>JStack's Blog {console.log('log de dentro do JSX')}</h1>
      <h2>{category}</h2>
    </>
  )
}

export default App;