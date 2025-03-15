import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";

function DeleteConfirmation() {
  const { deleteBook } = useBooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBook(id);
    navigate("/");
  };
  return (
    <div className="m-auto flex min-w-xl flex-col gap-6 rounded-xl border-2 border-sky-300 p-4">
      <h3 className="text-center text-2xl font-semibold">
        Are you sure you want to delete this book?
      </h3>
      <button
        className="m-auto w-[60%] cursor-pointer border-2 border-white bg-red-600 py-4 text-white hover:border-red-600 hover:bg-white hover:text-red-600"
        onClick={handleDelete}
      >
        Yes, Delete it
      </button>
    </div>
  );
}

export default DeleteConfirmation;
