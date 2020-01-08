import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import evaluate from "./evaluate";
import "./index.css";

let mathStore = createStore(evaluate);
const destination = document.getElementById("container");

ReactDom.render(
    <Provider store = {mathStore}>
        <App/>
    </Provider>, 
    destination
);