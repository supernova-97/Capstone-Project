import Link from "next/link";
import styled from "styled-components";

function JournalPage({ journalData, journals }) {
  return (
    <JournalWrapper>
      <h1>Journal</h1>
      <EntriesWrapper>
        {journals.length > 0 ? (
          <>
            {journals.map((journal) => (
              <JournalLink key={journal.id} href={`/journal/${journal.id}`}>
                {journal.name} in {journal.destination}
              </JournalLink>
            ))}
          </>
        ) : (
          "No Journals yet. Create one!"
        )}
        <NewJournalButton href="/journal/form">New Journal</NewJournalButton>
      </EntriesWrapper>
      <DashboardLink href="/">Dashboard</DashboardLink>
    </JournalWrapper>
  );
}

export default JournalPage;

const JournalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  padding: 30px;
  box-shadow: -3px 3px black;
`;

const DashboardLink = styled(Link)`
  background-color: var(--button-color);
  color: var(--button-text-color);
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

const JournalLink = styled(Link)`
  background-color: var(--button-color);
  color: var(--button-text-color);
  color: black;
  text-decoration: none;
  box-shadow: -2px 2px black;
  padding: 5px 15px;

  margin: 15px;
  transition: 0.3s;
  :hover {
    background-color: #db9d47;
  }
`;

const NewJournalButton = styled(Link)`
  background-color: var(--button-color);
  color: var(--button-text-color);
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
