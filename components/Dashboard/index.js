import Link from "next/link";
import styled from "styled-components";

function Dashboard() {
  return (
    <>
      <MainHeader>CoPlan</MainHeader>
      <DashboardContainer>
        <ToDoBoardLink href="/to-do">To-do-board</ToDoBoardLink>
        <NewTripLink href="/new-trip">+</NewTripLink>
        <p>Add new Trip</p>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;

const DashboardContainer = styled.div`
  margin: 0 5%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -3px 3px black;
`;

const MainHeader = styled.h1`
  margin: 20px auto;
  width: 40%;
  text-align: center;
  background-color: #d9ff80;
  box-shadow: -5px 5px black;
  height: 50px;
  padding: 6px;
`;

const ToDoBoardLink = styled(Link)`
  background-color: #d9ff80;
  color: black;
  margin: 30px;
  padding: 14px;
  height: 50px;
  width: 150px;
  border: 2px solid #000;
  box-shadow: -3px 3px black;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;

const NewTripLink = styled(Link)`
  background-color: #d9ff80;
  margin: 30px 0 0 0;
  padding: 5px;
  height: 35px;
  width: 35px;
  border: 2px solid #000;
  border-radius: 50%;
  box-shadow: -3px 3px black;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;
