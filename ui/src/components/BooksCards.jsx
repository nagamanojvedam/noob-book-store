import { useBooks } from "../contexts/BooksContext";
import CardItem from "./CardItem";

function BooksCards() {
  const { books } = useBooks();
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-2">
      {books.map((book) => (
        <CardItem book={book} key={book._id} />
      ))}
    </div>
  );
}

export default BooksCards;
