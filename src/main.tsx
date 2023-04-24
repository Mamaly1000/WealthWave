import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppContextComponent from "./context/AppContext.js";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextComponent>
        <App />
      </AppContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);
