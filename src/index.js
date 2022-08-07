import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);



//import React from "react";
//import ReactDOM from "react-dom";
//import * as PI from "./math.js";

//ReactDOM.render(
// <ul>
//    <li>{pi.default}</li>
//   <li>{pi.doublePi}</li>
//   <li>{pi.triplePi}</li>
// </ul>,
// document.getElementById("root")
//);