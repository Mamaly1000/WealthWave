import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { BrowserRouter } from "react-router-dom";
import AppContextComponent from "./context/AppContext.js";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextComponent>
        <App />
      </AppContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);
