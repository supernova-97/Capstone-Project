import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

function JournalDetail({ journals }) {
  const router = useRouter();
  const { journalID } = router.query;
  const currentJournal = journals.find((journal) => journal.id === journalID);

  if (!currentJournal) {
    return <p>Oopsie woopsie :(</p>;
  }

  const { name, destination, description } = currentJournal;

  return (
    <>
      <EntryWrapper>
        <Heading>{name}</Heading>
        <Destination>in {destination}</Destination>
        <Description>&quot;{description}&quot;</Description>
      </EntryWrapper>
      <BackToJournalsButton href="/journal">
        back to Journals
      </BackToJournalsButton>
    </>
  );
}

export default JournalDetail;

const EntryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0;
  background-color: #d9ff80;
  padding: 10px;
  width: fit-content;
  text-align: center;
`;

const Destination = styled.h2`
  text-decoration: underline;
  margin: 5px 0 5px 0;
  text-underline-offset: 5px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin: 30px;
`;

const BackToJournalsButton = styled(Link)`
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 45px 10px 0 10px;
  padding: 5px;
  width: fit-content;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;
