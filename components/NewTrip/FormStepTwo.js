import styled from "styled-components";

function FormStepTwo({
  nextStep,
  onFormInput,
  onAddToDo,
  formToDos,
  onToDoInput,
  toDoInputRef,
}) {
  return (
    <>
      <label htmlFor="who">Who is coming?</label>
      <StyledInput
        type="text"
        id="who"
        name="who"
        placeholder="e.g. Luke, Leia, Chewie, Han..."
        required
        onChange={onFormInput}
      />
      <label htmlFor="what">What do we need?</label>
      <StyledInput
        type="text"
        id="what"
        name="todo"
        onChange={onToDoInput}
        ref={toDoInputRef}
      />
      <AddButton type="button" onClick={onAddToDo}>
        Add
      </AddButton>
      <StyledList>
        {formToDos.map((todo, i) => (
          <ListItem key={i}>{todo.todo}</ListItem>
        ))}
      </StyledList>
      <ButtonMenu>
        <Button type="submit">Create new Trip</Button>
      </ButtonMenu>
    </>
  );
}

export default FormStepTwo;

const StyledInput = styled.input`
  background-color: #fff;
  color: #000;
  height: 1.7rem;
  margin: 0.7rem;
  box-shadow: -2px 3px black;
  border: 1px solid black;
  :focus {
    outline: none;
    border: 2px solid #db9d47;
  }

  ::placeholder {
    color: black;
    opacity: 0.3;
  }
`;

const Button = styled.button`
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: 40%;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;

const AddButton = styled.button`
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 5px 0 0 10px;
  padding: 5px;
  width: 40%;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
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

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;
