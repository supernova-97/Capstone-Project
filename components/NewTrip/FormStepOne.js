import styled from "styled-components";

function FormStepOne({ nextStep, handleChange }) {
  return (
    <>
      <label htmlFor="name">Name your trip:</label>
      <StyledInput
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
      />
      <label htmlFor="where">Where are we going?</label>
      <StyledInput
        type="text"
        id="where"
        name="where"
        required
        onChange={handleChange}
      />
      <label htmlFor="when">When are we going?</label>
      <StyledInput
        type="date"
        id="when"
        name="when"
        required
        onChange={handleChange}
      />
      <NextButton onClick={nextStep}>Next Step</NextButton>
    </>
  );
}

export default FormStepOne;

const StyledInput = styled.input`
  background-color: #d9ff80;
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
  background-color: #d9ff80;
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
