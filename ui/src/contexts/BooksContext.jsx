import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useEffect, useState } from "react";

const apiUrl = "http://localhost:3000/books";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [type, setType] = useState("table");
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const {
        data: {
          data: { books },
        },
      } = await axios(`${apiUrl}`);

      setBooks(books);
    } catch (err) {
      console.error(err.message);
      enqueueSnackbar({ message: "Cannot get all books", variant: "error" });
    }
  };

  const createBook = async (data) => {
    try {
      await axios(`${apiUrl}`, {
        method: "POST",
        data,
      });

      await getBooks();
      enqueueSnackbar({ message: "Book Created", variant: "success" });
    } catch (err) {
      console.error(err.message);
      enqueueSnackbar({ message: "Cannot create Book", variant: "error" });
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios(`${apiUrl}/${id}`, { method: "DELETE" });
      enqueueSnackbar({ message: "Book Deleted", variant: "success" });
    } catch (err) {
      console.error(err.message);
      enqueueSnackbar({ message: "Cannot Delete Book", variant: "error" });
    } finally {
      await getBooks();
    }
  };

  const getBookById = async (id) => {
    try {
      const {
        data: {
          data: { book },
        },
      } = await axios(`${apiUrl}/${id}`);

      return book;
    } catch (err) {
      console.error(err.message);
      enqueueSnackbar({ message: "Cannot find the Book", variant: "error" });
      return {};
    }
  };

  const updateBook = async (id, data) => {
    try {
      await axios(`${apiUrl}/${id}`, { method: "PATCH", data });
      enqueueSnackbar({
        message: "Book edited successfully",
        variant: "success",
      });
    } catch (err) {
      console.error(err.message);
      enqueueSnackbar({ message: "Cannot update book", variant: "error" });
    } finally {
      await getBooks();
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        type,
        showModal,
        modalId,
        setShowModal,
        setModalId,
        setType,
        createBook,
        deleteBook,
        updateBook,
        getBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);

  if (context === undefined)
    throw Error("Books context cannot be used outside its provider");

  return context;
}

export { BooksProvider, useBooks };
