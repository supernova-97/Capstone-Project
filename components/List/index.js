import Link from "next/link";
import styled from "styled-components";

function List({ toDos, onDeleteToDo }) {
  return (
    <>
      <ListWrapper>
        <ul>
          {toDos.map((toDo, index) => (
            <ListItem key={toDo.id}>
              <StyledCheckBox type="checkbox" />
              <StyledText>{toDo.name}</StyledText>
              <StyledDeleteButton onClick={() => onDeleteToDo(index)}>
                x
              </StyledDeleteButton>
            </ListItem>
          ))}
        </ul>
        <StyledConditionalText>
          {toDos.length > 0 ? "" : "No to-dos yet. Create some!"}
        </StyledConditionalText>
      </ListWrapper>
      <Link href="/">Dashboard</Link>
    </>
  );
}

export default List;

//Styling

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
