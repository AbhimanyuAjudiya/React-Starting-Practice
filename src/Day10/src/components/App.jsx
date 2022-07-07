import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    return setCount(count + 1);
  }
  function decrease() {
    return setCount(count - 1);
  }

  return (
    <div className="container">
      <button onClick={decrease}>+</button>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
