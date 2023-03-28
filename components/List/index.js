import {
  ListItem,
  StyledDeleteButton,
  StyledText,
  StyledConditionalText,
  StyledCheckBox,
  ListWrapper,
} from "./List.styled";
import Link from "next/link";

function List({ toDos, onDeleteToDo }) {
  return (
    <>
      <ListWrapper>
        <ul>
          {toDos.map((toDo, index) => (
            <ListItem key={toDo.id}>
              <StyledCheckBox type="checkbox" />
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
      <Link href="/">Dashboard</Link>
    </>
  );
}

export default List;
