import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./styles/main.scss";
import "./styles/global.css";
import { StateProvider } from "./state/StateProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
