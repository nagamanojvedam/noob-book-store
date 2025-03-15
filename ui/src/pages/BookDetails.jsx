import Back from "../components/Back";
import { useParams } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";
import { useEffect, useState } from "react";

function BookDetails() {
  const { getBookById } = useBooks();
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const data = await getBookById(id);
      setBook(data);
    };
    getBook();
  }, [id, getBookById]);
  return (
    <div className="flex flex-col gap-4 p-4">
      <Back />
      <h2 className="text-2xl font-semibold">Show Book</h2>
      <div className="flex w-fit flex-col gap-4 rounded-lg border-2 border-sky-400 p-4">
        <div className="space-x-4">
          <span className="text-lg font-semibold">ID</span>
          <span className="text-stone-800">{book._id}</span>
        </div>
        <div className="space-x-4">
          <span className="text-lg font-semibold">Title</span>
          <span className="text-stone-800">{book.title}</span>
        </div>
        <div className="space-x-4">
          <span className="text-lg font-semibold">Author</span>
          <span className="text-stone-800">{book.author}</span>
        </div>
        <div className="space-x-4">
          <span className="text-lg font-semibold">Published Year</span>
          <span className="text-stone-800">{book.publishYear}</span>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
