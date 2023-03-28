import styled from "styled-components";

export const ListContainer = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  width: fit-content;
  padding: 10px;
  margin: 0px;
`;

export const StyledCheckBox = styled.input`
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
  :after {
  }
`;

export const StyledDeleteButton = styled.button`
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

export const StyledP = styled.p`
  margin: 0 15px 0 0;
`;

export const StyledConditionalP = styled.p`
  text-align: center;
  margin: 40px;
`;

export const ListWrapper = styled.section`
  margin: 30px 10px 10px 10px;
  width: auto;
  height: 400px;
  border: 2px solid black;
  overflow: scroll;
`;
