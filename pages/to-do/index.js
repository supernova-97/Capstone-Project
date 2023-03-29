import Heading from "../../components/Heading";
import Form from "../../components/Form";
import List from "../../components/List";

function ToDoBoard({ onAddToDo, onDeleteToDo, toDos }) {
  return (
    <>
      <Heading>To-Do Board</Heading>
      <Form onAddToDo={onAddToDo} />
      <List toDos={toDos} onDeleteToDo={onDeleteToDo} />
    </>
  );
}

export default ToDoBoard;
