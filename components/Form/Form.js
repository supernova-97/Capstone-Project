import { StyledForm, StyledInput, StyledAddButton } from "./Form.styled";

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
        <label htmlFor="todo" />
        <p>To do:</p>
        <StyledInput type="text" id="todo" name="name" required={true} />
        <StyledAddButton type="submit">Add</StyledAddButton>
      </StyledForm>
    </>
  );
}

export default Form;
