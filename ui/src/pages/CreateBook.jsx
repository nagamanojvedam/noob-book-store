import Back from "../components/Back";
import CreateBookForm from "../components/CreateBookForm";

function CreateBook() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Back />
      <h2 className="text-2xl font-semibold">Create Book</h2>
      <CreateBookForm />
    </div>
  );
}

export default CreateBook;
