// import React from "react";
import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

// グローバルStateをImport
import { TodoProvider } from "./component/provider/TodoProvider";

root.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);

reportWebVitals();
