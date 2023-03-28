import Heading from "../../components/Heading";
import Form from "../../components/Form";
import List from "../../components/List";
import { useState } from "react";
import { uid } from "uid";

function ToDoBoard() {
  const [toDos, setToDos] = useState([]);
  function handleAddToDo(newToDo) {
    setToDos([...toDos, { id: uid(), ...newToDo }]);
  }

  function handleDeleteToDo(index) {
    const newToDos = toDos.filter((_, i) => i !== index);
    setToDos(newToDos);
  }

  return (
    <>
      <Heading>To-Do Board</Heading>
      <Form onAddToDo={handleAddToDo} />
      <List toDos={toDos} onDeleteToDo={handleDeleteToDo} />
    </>
  );
}

export default ToDoBoard;
