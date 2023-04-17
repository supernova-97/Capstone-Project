import styled from "styled-components";

function JournalForm({ onJournalFormInput, onJournalSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onJournalSubmit();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Give your trip a name:</label>
        <StyledInput
          type="text"
          name="name"
          id="name"
          onChange={onJournalFormInput}
          required
        />
        <label htmlFor="destination">Where did you go?</label>
        <StyledInput
          type="text"
          name="destination"
          id="destination"
          onChange={onJournalFormInput}
          required
        />
        <label htmlFor="description">Tell us about your trip:</label>
        <StyledInput
          type="textarea"
          name="description"
          id="description"
          onChange={onJournalFormInput}
          required
        />
        <AddButton type="submit">Add Journal</AddButton>
      </StyledForm>
    </>
  );
}

export default JournalForm;

const StyledInput = styled.input`
  background-color: #d9ff80;
  height: 1.7rem;
  margin: 1.3rem;
  box-shadow: -2px 3px black;
  border: 1px solid black;
  :focus {
    outline: none;
    border: 2px solid #db9d47;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px;
`;

const AddButton = styled.button`
  background-color: #d9ff80;
  font-size: 1rem;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: fit-content;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;
