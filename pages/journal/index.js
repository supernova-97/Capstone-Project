import Link from "next/link";
import styled from "styled-components";

function Journal({ journalData, setJournalData }) {
  return (
    <>
      <JournalWrapper>
        <h1>Journal</h1>
        <Link href="/journal/entry">
          {journalData.name} in {journalData.destination}
        </Link>
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
