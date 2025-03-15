import { useBooks } from "../contexts/BooksContext";
import Operations from "./Operations";

function BooksList() {
  const { books } = useBooks();
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="bg-gray-300">
          <th className="rounded-md border border-slate-600">No</th>
          <th className="rounded-md border border-slate-600">Title</th>
          <th className="rounded-md border border-slate-600">Author</th>
          <th className="rounded-md border border-slate-600">Publish Year</th>
          <th className="rounded-md border border-slate-600">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, idx) => (
          <tr key={book._id} className="text-center">
            <td className="rounded-md border border-slate-600 p-1">
              {idx + 1}
            </td>

            <td className="rounded-md border border-slate-600">{book.title}</td>
            <td className="rounded-md border border-slate-600">
              {book.author}
            </td>
            <td className="rounded-md border border-slate-600">
              {book.publishYear}
            </td>
            <td className="rounded-md border border-slate-600">
              <Operations id={book._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksList;
