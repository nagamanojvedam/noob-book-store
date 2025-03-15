import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BooksProvider } from "./contexts/BooksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksProvider>
  </StrictMode>,
);
