import styled from "styled-components";

function FormStepOne({ nextStep, onFormInput }) {
  return (
    <>
      <label htmlFor="name">Name your trip:</label>
      <StyledInput
        type="text"
        id="name"
        name="name"
        required
        onChange={onFormInput}
      />
      <label htmlFor="where">Where are we going?</label>
      <StyledInput
        type="text"
        id="where"
        name="where"
        required
        onChange={onFormInput}
      />
      <label htmlFor="when">When are we going?</label>
      <StyledInput
        type="date"
        id="when"
        name="when"
        required
        onChange={onFormInput}
      />
      <NextButton onClick={nextStep}>Next Step</NextButton>
    </>
  );
}

export default FormStepOne;

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
`;

const NextButton = styled.button`
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 0 0 10px;
  padding: 5px;
  width: 40%;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;
