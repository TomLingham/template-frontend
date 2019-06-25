import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const node = document.body.appendChild(document.createElement("div"));

render(React.createElement(App), node);
