import styled from "styled-components";
import { useState } from "react";

function Form({ onAddToDo, tripData }) {
  const [selectedFriend, setSelectedFriend] = useState(tripData.who[0]);

  function handleSubmit(event) {
    event.preventDefault();
    onAddToDo(event.target.todo.value);
    event.target.reset();
  }

  const handleChange = (event) => {
    setSelectedFriend(event.target.value);
  };

  const friends = tripData.who;
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="todo">To do:</label>
        <StyledInput type="text" id="todo" name="todo" required />
        <label>Choose a friend:</label>
        <StyledSelect value={selectedFriend} onChange={handleChange}>
          {friends.map((friend, index) => (
            <option value={friend} key={index}>
              {friend}
            </option>
          ))}
        </StyledSelect>
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
    border: 2px solid #db9d47;
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
    background-color: #db9d47;
    box-shadow: -3.5px 4.5px black;
  }
  :active {
    background-color: #fff;
    box-shadow: -2px 3px black;
    transition: none;
  }
`;

const StyledSelect = styled.select`
  padding: 2px 20px;
  border: 1px solid #000;
  box-shadow: -2px 2px black;
  background-color: #d9ff80;

  :focus {
    outline: none;
    border: 2px solid #db9d47;
  }
`;
