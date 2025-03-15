import Selector from "../components/Selector";
import Header from "../components/Header";
import BooksTable from "../components/BooksTable";
import BooksCards from "../components/BooksCards";
import { useBooks } from "../contexts/BooksContext";
import BookModal from "../components/BookModal";

function Home() {
  const { type, showModal } = useBooks();

  return (
    <main className="relative p-4">
      <Selector />
      <Header />
      {type === "table" ? <BooksTable /> : <BooksCards />}
      {showModal && <BookModal />}
    </main>
  );
}

export default Home;
