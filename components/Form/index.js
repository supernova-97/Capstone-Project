import styled from "styled-components";

function Form({ onAddToDo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddToDo(data);
    event.target.reset();
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="todo">To do:</label>

        <StyledInput type="text" id="todo" name="name" required />
        <StyledAddButton type="submit">Add</StyledAddButton>
      </StyledForm>
    </>
  );
}

export default Form;

//Styling

const StyledForm = styled.form`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-shadow: -4px 4px black;
`;

const StyledInput = styled.input`
  background-color: #d9ff80;
  height: 1.7rem;
  margin: 1.3rem;
  box-shadow: -2px 3px black;
  border: 1px solid black;
  :focus {
    outline: none;
    border: 2px solid #4af52c;
  }
`;

const StyledAddButton = styled.button`
  background-color: #d9ff80;
  border: 1px solid black;
  box-shadow: -2px 3px black;
  margin: 15px;
  padding: 2px 15px;
  transition: 0.3s;
  :hover {
    background-color: #72b359;
    box-shadow: -3.5px 4.5px black;
  }
  :active {
    background-color: #fff;
    box-shadow: -2px 3px black;
    transition: none;
  }
`;