import React, { useEffect } from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./output.css";

ReactGA.initialize("UA-169730099-1");

ReactGA.pageview("/");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
