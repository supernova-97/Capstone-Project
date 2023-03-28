import Heading from "../components/Heading";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import { useState } from "react";
import { uid } from "uid";

export default function Home() {
  const [toDos, setToDos] = useState([]);

  function handleAddToDo(newToDo) {
    setToDos([...toDos, { id: uid(), ...newToDo }]);
  }

  function handleDeleteToDo(index) {
    console.log("index", index);
    const newToDos = toDos.filter((_, i) => i !== index);
    setToDos(newToDos);
  }

  console.log("todos:", toDos);
  return (
    <main>
      <Heading>To-Do Board</Heading>
      <Form onAddToDo={handleAddToDo} />
      <List toDos={toDos} onDeleteToDo={handleDeleteToDo} />
    </main>
  );
}
