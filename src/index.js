import React from "react";
import ReactDOM from "react-dom";

const fname = "Suhem";
const lname = "Parashar";
const luckyNumber = "5";

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h1>Hello {fname + " " + lname}</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
