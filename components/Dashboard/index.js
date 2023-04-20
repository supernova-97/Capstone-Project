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
            <JournalLink href="/journal">Journal</JournalLink>
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
          <WelcomeSection>
            <SubHeader>Welcome to CoPlan!</SubHeader>
            <WelcomeText>
              Planning your trips has never been easier. Create a trip to use
              the To-Do-Board, which will give you a handy overview over things
              you need to prepare.
            </WelcomeText>
            <WelcomeText>
              You can assign the to-dos to friends and check your progress.
            </WelcomeText>
            <WelcomeText>
              Use the Journals to save your highlights during the trip and share
              it with your friends.
            </WelcomeText>
            <NewTripLink href="/new-trip">Add new Trip</NewTripLink>
          </WelcomeSection>
        )}
      </DashboardContainer>
    </>
  );
}

export default Dashboard;

const DashboardContainer = styled.div`
  background-color: var(--background-color);
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
  margin: auto;
  margin: 20px;
  text-align: center;
`;

const SubHeader = styled.h2`
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeText = styled.p`
  text-align: center;
`;

const ToDoBoardLink = styled(Link)`
  background-color: var(--button-color);
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

const JournalLink = styled(Link)`
  background-color: var(--button-color);
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
  background-color: var(--button-color);
  color: var(--button-text-color);
  margin-top: 20px;
  padding: 3px 10px;
  height: 30px;
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
  width: fit-content;
  padding: 5px;
  box-shadow: -2px 2px black;
  border: 1px solid black;
`;

const TripInfoHeading = styled.dt`
  margin: 25px 0 5px 0;
  font-size: 20px;
`;
