import { useEffect, useState } from "react";
import { useBooks } from "../contexts/BooksContext";
import { useNavigate } from "react-router-dom";

function CreateBookForm({ type = "create", bookId }) {
  const { createBook, updateBook, getBookById } = useBooks();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(2025);

  useEffect(() => {
    const getBook = async (bookId) => {
      const book = await getBookById(bookId);

      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.publishYear);
    };

    if (bookId) getBook(bookId);
  }, [bookId, getBookById]);

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    if (!title || !author || !year) return;

    const data = {
      title,
      author,
      publishYear: year,
    };

    if (type === "create") await createBook(data);
    else await updateBook(bookId, data);

    setTitle("");
    setAuthor("");
    setYear(2025);

    navigate("/");
  };
  return (
    <form
      className="m-auto flex min-w-xl flex-col gap-6 rounded-xl border-2 border-sky-300 p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className="w-fit">Title</label>
        <input
          type="text"
          className="border-2 border-stone-300 px-3 py-2"
          id="title"
          name="title"
          value={title}
          onChange={(evnt) => setTitle(evnt.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="w-fit">Author</label>
        <input
          type="text"
          className="border-2 border-stone-300 px-3 py-2"
          id="author"
          name="author"
          value={author}
          onChange={(evnt) => setAuthor(evnt.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="w-fit">Publish Year</label>
        <input
          type="number"
          className="border-2 border-stone-300 px-3 py-2"
          id="publishYear"
          name="publishYear"
          value={year}
          onChange={(evnt) => setYear(evnt.target.value)}
        />
      </div>
      <button className="m-auto w-[80%] bg-sky-300 py-2">Save</button>
    </form>
  );
}

export default CreateBookForm;
