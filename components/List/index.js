import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";

function List({ toDos, setToDos, onDeleteToDo, tripData }) {
  const [isCheckedArray, setIsCheckedArray] = useState({});
  const [todoEditing, setTodoEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const friends = tripData.who;

  function toggleIsChecked(id) {
    setIsCheckedArray((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  function editTodo(id) {
    const updatedTodos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.todo = editText;
      }
      return todo;
    });
    setToDos(updatedTodos);
    setTodoEditing(null);
    setEditText("");
  }

  console.log("toDos:", toDos);
  return (
    <>
      <ListWrapper>
        {friends.map((friend, index) => (
          <StyledSection key={index}>
            <SectionHeading>{friend}</SectionHeading>
            <ul>
              {toDos.map((toDo) => {
                if (friend === toDo.section) {
                  return (
                    <ListItem key={toDo.id}>
                      <StyledCheckBox
                        type="checkbox"
                        onClick={() => toggleIsChecked(toDo.id)}
                      />

                      {todoEditing === toDo.id ? (
                        <input
                          type="text"
                          onChange={(e) => setEditText(e.target.value)}
                          value={editText}
                          placeholder={toDo.todo}
                        />
                      ) : (
                        <StyledText isCheckedArray={isCheckedArray[toDo.id]}>
                          {toDo.todo}
                        </StyledText>
                      )}

                      <StyledDeleteButton onClick={() => onDeleteToDo(toDo.id)}>
                        x
                      </StyledDeleteButton>

                      {todoEditing === toDo.id ? (
                        <button onClick={() => editTodo(toDo.id)}>Save</button>
                      ) : (
                        <button onClick={() => setTodoEditing(toDo.id)}>
                          Edit
                        </button>
                      )}
                    </ListItem>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </StyledSection>
        ))}
        <StyledConditionalText>
          {toDos.length > 0 ? "" : "No to-dos yet. Create some!"}
        </StyledConditionalText>
      </ListWrapper>

      <DashboardLink href="/">Dashboard</DashboardLink>
    </>
  );
}

export default List;

//Styling

const ListItem = styled.li`
  display: flex;
  align-items: center;
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

const StyledDeleteButton = styled.button`
  background-color: #d9ff80;
  height: fit-content;
  width: fit-content;
  border-radius: 20%;
  border: 1px solid black;
  box-shadow: -2px 2px black;
  font-size: 0.7rem;
  margin-left: 30px;
  :hover {
    background-color: #72b359;
    box-shadow: -3px 3px black;
  }
  :active {
    background-color: #fff;
    box-shadow: -2px 2px black;
    transition: none;
  }
`;

const StyledText = styled.p`
  margin: 0 15px 0 0;

  ${(props) =>
    props.isCheckedArray &&
    css`
      text-decoration: line-through;
      opacity: 0.3;
    `}
`;

const StyledConditionalText = styled.p`
  text-align: center;
  margin: 40px;
`;

const ListWrapper = styled.section`
  margin: 30px 10px 10px 10px;
  width: auto;
  height: 400px;
  border: 2px solid black;
  overflow: scroll;
`;

const DashboardLink = styled(Link)`
  background-color: #d9ff80;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: 40%;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;

const StyledSection = styled.section`
  margin: 0 20px;
  display: flex;
  border-bottom: 2px solid black;
`;

const SectionHeading = styled.h3`
  color: #db9d47;
`;
