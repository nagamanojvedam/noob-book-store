import { useBooks } from "../contexts/BooksContext";

function Selector() {
  const { setType } = useBooks();
  return (
    <section className="flex justify-center gap-5">
      {["Table", "Card"].map((item, idx) => (
        <button
          className="rounded-sm bg-sky-300 px-3 py-1 hover:bg-sky-400 hover:text-white"
          key={idx + 1}
          onClick={() => setType(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
    </section>
  );
}

export default Selector;
