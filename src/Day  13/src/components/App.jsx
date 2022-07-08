import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [backgroundColor, setBackgroundColor] = useState("white");
  function handelClick() {
    setHeadingText("Submitted");
  }
  function handelMouseOver() {
    setBackgroundColor("black");
  }
  function handleMouseOut() {
    setBackgroundColor("white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: backgroundColor }}
        onMouseOut={handleMouseOut}
        onMouseOver={handelMouseOver}
        onClick={handelClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
