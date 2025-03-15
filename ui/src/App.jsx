import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <div className="transition-all transition-discrete duration-300 ease-linear">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/delete-book/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
