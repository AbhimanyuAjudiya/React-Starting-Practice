import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");
  var change;
  function handelChange(event) {
    setName(event.target.value);
  }
  function handelSubmit() {
    setSubmit(name);
  }

  return (
    <div className="container">
      <h1>Hello {submit}</h1>
      <input
        onChange={handelChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default App;
