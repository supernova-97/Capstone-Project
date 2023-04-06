import Link from "next/link";
import styled from "styled-components";
import Countdown from "../Countdown";

function Dashboard({ tripData }) {
  return (
    <>
      <MainHeader>CoPlan</MainHeader>
      <DashboardContainer>
        {tripData.name && (
          <>
            <Countdown tripData={tripData} />
            <ToDoBoardLink href="/to-do">To-do-board</ToDoBoardLink>
            <DetailedSection>
              <TripInfoHeading>Trip name:</TripInfoHeading>
              <TripInfo>{tripData.name}</TripInfo>
              <TripInfoHeading>Where to:</TripInfoHeading>
              <TripInfo>{tripData.where}</TripInfo>
              <TripInfoHeading>Date:</TripInfoHeading>
              <TripInfo>{tripData.when}</TripInfo>
              <TripInfoHeading>Companions:</TripInfoHeading>
              <TripInfo>{tripData.who.join(", ")}</TripInfo>
            </DetailedSection>
          </>
        )}
        {!tripData.name && (
          <>
            <NewTripLink href="/new-trip">+</NewTripLink>
            <p>Add new Trip</p>
          </>
        )}
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
  height: auto;
  padding: 10px;
`;

const MainHeader = styled.h1`
  margin: 20px auto;
  width: 40%;
  text-align: center;
  /* background-color: #d9ff80; */
  background-image: linear-gradient(to bottom right, #96fbc4 0%, #d9ff80 80%);
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
  color: black;
  margin-top: 20px;
  padding: 3px;
  height: 30px;
  width: 30%;
  border: 2px solid #000;
  box-shadow: -3px 3px black;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;

const DetailedSection = styled.dl`
  display: flex;
  flex-direction: column;
`;

const TripInfo = styled.dd`
  margin: 5px;
  background-color: #d9ff80;
  width: fit-content;
  padding: 5px;
  box-shadow: -2px 2px black;
  border: 1px solid black;
`;

const TripInfoHeading = styled.dt`
  margin: 25px 0 5px 0;
`;
