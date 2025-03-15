import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="w-fit rounded-sm bg-indigo-950 px-4 py-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#ffffff"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    </div>
  );
}

export default Back;
