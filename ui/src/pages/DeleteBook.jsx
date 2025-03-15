import Back from "../components/Back";
import DeleteConfirmation from "../components/DeleteConfirmation";

function DeleteBook() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Back />
      <h2 className="text-2xl font-semibold">Delete Book</h2>
      <DeleteConfirmation />
    </div>
  );
}

export default DeleteBook;
