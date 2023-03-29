import NewTrip from "../../components/NewTrip";

function NewTripPage({ onAddToDo }) {
  return (
    <>
      <NewTrip onAddToDo={onAddToDo} />
    </>
  );
}

export default NewTripPage;
