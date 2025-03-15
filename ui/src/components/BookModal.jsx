import { useEffect, useState } from "react";
import { useBooks } from "../contexts/BooksContext";

function BookModal() {
  const { setShowModal, getBookById, modalId } = useBooks();

  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async (id) => {
      const book = await getBookById(id);
      console.log(book);
      setBook(book);
    };
    getBook(modalId);
  }, [modalId, setBook, getBookById]);

  return (
    <div
      className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-gray-950/40"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative flex w-[60%] flex-col gap-4 rounded-xl bg-white p-3 shadow-xl"
        onClick={(evnt) => evnt.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <span className="rounded-sm bg-red-300 px-3 py-1">
            {book.publishYear}
          </span>
          <span className="text-slate-500">{book._id}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fc7b7b"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p>{book.title}</p>
          </div>

          <div className="flex gap-1 p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fc7b7b"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <p>{book.author}</p>
          </div>
        </div>
        <p>Anything you want to show</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          consectetur repellat natus, saepe obcaecati, mollitia ipsa at
          aspernatur repudiandae ea omnis molestiae odit accusamus suscipit quia
          qui debitis nulla! Ut.
        </p>
        <button
          className="absolute right-[50%] bottom-[-48px] cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#d62323"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BookModal;
