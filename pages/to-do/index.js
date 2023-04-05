import Heading from "../../components/Heading";
import Form from "../../components/Form";
import List from "../../components/List";
import { useState } from "react";

function ToDoBoard({
  onAddToDo,
  onDeleteToDo,
  toDos,
  tripData,
  selectedFriend,
  setSelectedFriend,
}) {
  // const [selectedFriend, setSelectedFriend] = useState(tripData.who[0]);
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
