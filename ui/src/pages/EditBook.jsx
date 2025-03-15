import { useParams } from "react-router-dom";
import Back from "../components/Back";
import CreateBookForm from "../components/CreateBookForm";

function EditBook() {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-4 p-4">
      <Back />
      <h2 className="text-2xl font-semibold">Edit Book</h2>
      <CreateBookForm type="edit" bookId={id} />
    </div>
  );
}

export default EditBook;
