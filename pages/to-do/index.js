import Heading from "../../components/Heading";
import Form from "../../components/Form";
import List from "../../components/List";

function ToDoBoard({ onAddToDo, onDeleteToDo, toDos, tripData }) {
  return (
    <>
      <Heading>To-Do Board</Heading>
      <Form onAddToDo={onAddToDo} tripData={tripData} />
      <List toDos={toDos} onDeleteToDo={onDeleteToDo} tripData={tripData} />
    </>
  );
}

export default ToDoBoard;
