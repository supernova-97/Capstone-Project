import Link from "next/link";
import styled from "styled-components";

function Journal({ journalData }) {
  console.log("journalData in index:", journalData);
  return (
    <>
      <JournalWrapper>
        <h1>Journal</h1>
        <EntriesWrapper>
          {journalData ? (
            <p>
              {journalData.name} in {journalData.destination}
            </p>
          ) : (
            "No Journals yet. Create one!"
          )}
          <Link href="/journal/journal-form">New Journal</Link>
        </EntriesWrapper>
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
