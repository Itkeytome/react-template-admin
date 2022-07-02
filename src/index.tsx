import React from "react";
import ReactDOM from "react-dom/client";
import "./design/index.scss";
import App from './router'
// import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
