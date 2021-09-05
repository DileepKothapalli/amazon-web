import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
      <Route exact path="/" component={Auth}>
        <Navbar />
      </Route>
      <Route exact path="/Auth" component={Auth}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
