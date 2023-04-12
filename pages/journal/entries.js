import Link from "next/link";
import styled from "styled-components";

function JournalEntries({ journalData, setJournalData }) {
  return (
    <>
      <JournalWrapper>
        <h1>Journal</h1>
        <EntryWrapper>
          <EntryHeading>
            {journalData[0].name} in {journalData[0].destination}
          </EntryHeading>
          <Description>{journalData[0].description}</Description>
        </EntryWrapper>

        <DashboardLink href="/">Dashboard</DashboardLink>
      </JournalWrapper>
    </>
  );
}

export default JournalEntries;

const DashboardLink = styled(Link)`
  background-color: #d9ff80;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: fit-content;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;

const JournalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryHeading = styled.h2`
  background-color: #d9ff80;
  padding: 10px;
  box-shadow: -2px 2px black;
`;

const Description = styled.p`
  line-height: 22px;
  text-align: center;
`;
