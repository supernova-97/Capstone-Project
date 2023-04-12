import Link from "next/link";
import styled from "styled-components";

function Journal({ journalData, journals }) {
  return (
    <>
      <JournalWrapper>
        <h1>Journal</h1>
        <EntriesWrapper>
          {journalData ? (
            <ul>
              {journals.map((journal) => (
                <p key={journal.id}>
                  <Link href={`/journal/${journal.id}`}>
                    {journal.name} in {journal.destination}
                  </Link>
                </p>
              ))}
            </ul>
          ) : (
            "No Journals yet. Create one!"
          )}
          <Link href="/journal/form">New Journal</Link>
        </EntriesWrapper>
        <DashboardLink href="/">Dashboard</DashboardLink>
      </JournalWrapper>
    </>
  );
}

export default Journal;

const JournalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
