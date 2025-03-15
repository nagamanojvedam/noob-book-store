import Operations from "./Operations";

function CardItem({ book }) {
  return (
    <div className="rounded-md border-2 border-slate-500">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-500">{book._id}</h3>
          <span className="rounded-sm bg-red-300 px-3 py-1">
            {book.publishYear}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1 p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
              stroke="currentColor"
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
        <Operations id={book._id} />
      </div>
    </div>
  );
}

export default CardItem;
