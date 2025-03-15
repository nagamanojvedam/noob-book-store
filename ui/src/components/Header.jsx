import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <h3 className="text-3xl font-semibold">Books List</h3>
      <Link to="/create-book" className="p-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </Link>
    </header>
  );
}

export default Header;
