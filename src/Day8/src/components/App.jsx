import React from "react";
import Entry from "./Entry"
import Emojipedia from "../emojipedia";

function createEmoji(content){
  return (
    <Entry
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
