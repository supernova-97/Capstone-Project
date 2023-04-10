import Link from "next/link";
import styled from "styled-components";

function JournalEntry({ journalData, setJournalData }) {
  return (
    <>
      <JournalWrapper>
        <h1>Journal</h1>
        <EntryWrapper>
          <EntryHeading>
            {journalData.name} in {journalData.destination}
          </EntryHeading>
          <Description>{journalData.description}</Description>
        </EntryWrapper>
        <DashboardLink href="/">Dashboard</DashboardLink>
      </JournalWrapper>
    </>
  );
}

export default JournalEntry;

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
