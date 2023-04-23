import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import EntryForm from "../../components/EntryForm";
import Image from "next/image";

function JournalDetail({ journals, setJournals }) {
  const router = useRouter();
  const { journalID } = router.query;
  const currentJournal = journals.find((journal) => journal.id === journalID);

  function addEntry(newEntry) {
    setJournals((prevJournals) => {
      const updatedJournals = prevJournals.map((journal) => {
        if (journal.id === currentJournal.id) {
          return {
            ...journal,
            entries: [...journal.entries, newEntry],
          };
        }
        return journal;
      });
      return updatedJournals;
    });
  }

  if (!currentJournal) {
    return <p>Oopsie woopsie :(</p>;
  }

  const { name, destination, description, entries } = currentJournal;

  return (
    <>
      <Wrapper>
        <Header>
          <Heading>{name}</Heading>
          <Destination>in {destination}</Destination>
          <Description>&quot;{description}&quot;</Description>
        </Header>
        <h2>Your highlights:</h2>
        {entries ? (
          entries.map((entry) => {
            return (
              <EntryWrapper key={entry.id}>
                <StyledImage src={entry.image.url} alt="highlight pictures" />
                <p>{entry.text}</p>
              </EntryWrapper>
            );
          })
        ) : (
          <h3>No entries</h3>
        )}

        <EntryForm
          addEntry={addEntry}
          journals={journals}
          journalID={journalID}
        />
      </Wrapper>
      <BackToJournalsButton href="/journal">
        back to Journals
      </BackToJournalsButton>
    </>
  );
}

export default JournalDetail;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.section`
  border: 2px solid black;
  box-shadow: -3px 3px black;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0;
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

const EntryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  border: 2px solid black;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;

const StyledImage = styled.img`
  border-radius: 5px;
  box-shadow: -4px 4px 5px #000;
  height: 300px;
  width: 300px;
`;
