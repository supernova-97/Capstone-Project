import {
  ListContainer,
  StyledDeleteButton,
  StyledP,
  StyledConditionalP,
  StyledCheckBox,
} from "./List.styled";

function List({ toDos, onDeleteToDo }) {
  return (
    <>
      <ul>
        {toDos.map((toDo, index) => (
          <div key={toDo.id}>
            <ListContainer>
              <StyledCheckBox type="checkbox"></StyledCheckBox>
              <StyledP>{toDo.name}</StyledP>
              <StyledDeleteButton onClick={() => onDeleteToDo?.(index)}>
                x
              </StyledDeleteButton>
            </ListContainer>
          </div>
        ))}
      </ul>
      <StyledConditionalP>
        {toDos.length > 0 ? "" : "No to-dos yet. Create some!"}
      </StyledConditionalP>
    </>
  );
}

export default List;
