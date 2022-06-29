import React from "react";
import ReactDOM from "react-dom";

const t = new Date();
const time = t.getHours();

if (time <= 12) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "red" }}>
      Good morning
    </h1>,
    document.getElementById("root")
  );
} else if (time <= 18) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "green" }}>
      Good Afternoon
    </h1>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "blue" }}>
      Good evening
    </h1>,
    document.getElementById("root")
  );
}
