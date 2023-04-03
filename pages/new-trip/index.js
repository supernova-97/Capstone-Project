import NewTrip from "../../components/NewTrip";

function NewTripPage({ onAddToDo, tripData, setTripData }) {
  return (
    <>
      <NewTrip
        onAddToDo={onAddToDo}
        tripData={tripData}
        setTripData={setTripData}
      />
    </>
  );
}

export default NewTripPage;
