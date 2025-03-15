import axios from "axios";
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
    const {
      data: {
        data: { books },
      },
    } = await axios(apiUrl);

    setBooks(books);
  };

  const createBook = async (data) => {
    await axios(apiUrl, {
      method: "POST",
      data,
    });

    await getBooks();
  };

  const deleteBook = async (id) => {
    await axios(`${apiUrl}/${id}`, { method: "DELETE" });
    await getBooks();
  };

  const getBookById = async (id) => {
    const {
      data: {
        data: { book },
      },
    } = await axios(`${apiUrl}/${id}`);

    return book;
  };
  const updateBook = async (id, data) => {
    await axios(`${apiUrl}/${id}`, { method: "PATCH", data });
    await getBooks();
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
