import {
  ListItem,
  StyledDeleteButton,
  StyledText,
  StyledConditionalText,
  StyledCheckBox,
  ListWrapper,
} from "./List.styled";

function List({ toDos, onDeleteToDo }) {
  return (
    <>
      <ListWrapper>
        <ul>
          {toDos.map((toDo, index) => (
            <ListItem key={toDo.id}>
              <StyledCheckBox type="checkbox"></StyledCheckBox>
              <StyledText>{toDo.name}</StyledText>
              <StyledDeleteButton onClick={() => onDeleteToDo?.(index)}>
                x
              </StyledDeleteButton>
            </ListItem>
          ))}
        </ul>
        <StyledConditionalText>
          {toDos.length > 0 ? "" : "No to-dos yet. Create some!"}
        </StyledConditionalText>
      </ListWrapper>
    </>
  );
}

export default List;
