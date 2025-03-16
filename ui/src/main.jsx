import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BooksProvider } from "./contexts/BooksContext.jsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <BooksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BooksProvider>
    </SnackbarProvider>
  </StrictMode>,
);
