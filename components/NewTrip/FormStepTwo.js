import { useState } from "react";
import { uid } from "uid";

function FormStepTwo({ nextStep, handleChange }) {
  const [formToDo, setFormToDo] = useState([]);
  const [newToDo, setNewToDo] = useState([]);

  function saveToDos(e) {
    setNewToDo({
      ...newToDo,
      [e.target.name]: e.target.value,
    });
  }
  console.log("newtodo:", newToDo);
  function handleClick() {
    setFormToDo([...formToDo, { id: uid(), ...newToDo }]);
  }

  console.log("formToDo:", formToDo);
  return (
    <>
      <label htmlFor="who">Who is coming?</label>
      <input type="text" id="who" name="who" required onChange={handleChange} />
      <label htmlFor="what">What do we need?</label>
      <input type="text" id="what" name="what" onChange={saveToDos} required />
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <ul>
        {formToDo.map((todo) => (
          <li key={todo.id}>{todo.what}</li>
        ))}
      </ul>
      <button onClick={nextStep}>Back</button>
      <button type="submit">Create new Trip</button>
    </>
  );
}

export default FormStepTwo;