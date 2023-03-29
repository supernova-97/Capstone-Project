import { useState } from "react";
import { uid } from "uid";
import { useRef } from "react";
import styled from "styled-components";

function FormStepTwo({ nextStep, handleChange }) {
  const [formToDo, setFormToDo] = useState([]);
  const [newToDo, setNewToDo] = useState([]);
  const whatInputRef = useRef(null);

  function saveToDos(e) {
    setNewToDo({
      ...newToDo,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    setFormToDo([...formToDo, { id: uid(), ...newToDo }]);
    whatInputRef.current.value = "";
  }

  return (
    <>
      <label htmlFor="who">Who is coming?</label>
      <StyledInput
        type="text"
        id="who"
        name="who"
        required
        onChange={handleChange}
      />
      <label htmlFor="what">What do we need?</label>
      <StyledInput
        type="text"
        id="what"
        name="what"
        onChange={saveToDos}
        ref={whatInputRef}
      />
      <AddButton type="button" onClick={handleClick}>
        Add
      </AddButton>
      <StyledList>
        {formToDo.map((todo) => (
          <>
            <ListItem key={todo.id}>
              <StyledCheckBox type="checkbox" />
              {todo.what}
            </ListItem>
          </>
        ))}
      </StyledList>
      <ButtonMenu>
        <Button onClick={nextStep}>Back</Button>
        <Button type="submit">Create new Trip</Button>
      </ButtonMenu>
    </>
  );
}

export default FormStepTwo;

const StyledInput = styled.input`
  background-color: #d9ff80;
  height: 1.7rem;
  margin: 0.7rem;
  box-shadow: -2px 3px black;
  border: 1px solid black;
  :focus {
    outline: none;
    border: 2px solid #4af52c;
  }
`;

const Button = styled.button`
  background-color: #d9ff80;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: 40%;
`;

const AddButton = styled.button`
  background-color: #d9ff80;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 5px 0 0 10px;
  padding: 5px;
  width: 40%;
`;

const ButtonMenu = styled.div`
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  width: fit-content;
  padding: 10px;
  margin: 0px;
`;

const StyledCheckBox = styled.input`
  appearance: none;
  height: 15px;
  width: 15px;
  margin: 10px;
  background-color: #d9ff80;
  border: 1px solid black;
  box-shadow: -1px 1px black;
  :checked {
    background-color: grey;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;
