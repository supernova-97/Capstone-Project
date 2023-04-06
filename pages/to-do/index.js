import Heading from "../../components/Heading";
import Form from "../../components/Form";
import List from "../../components/List";

function ToDoBoard({
  onAddToDo,
  onDeleteToDo,
  toDos,
  tripData,
  selectedFriend,
  setSelectedFriend,
}) {
  return (
    <>
      <Heading>To-Do Board</Heading>
      <Form
        onAddToDo={onAddToDo}
        tripData={tripData}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <List
        toDos={toDos}
        onDeleteToDo={onDeleteToDo}
        tripData={tripData}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    </>
  );
}

export default ToDoBoard;
