import React, { useState } from "react";

function App() {
  const [currenttime, setTime] = useState(new Date().toLocaleTimeString());

  function liveTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(liveTime, 1000);
  return (
    <div className="container">
      <h1>{currenttime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
