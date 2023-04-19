import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import EntryForm from "../../components/EntryForm";
import Image from "next/image";

function JournalDetail({ journals, products, addProduct }) {
  const router = useRouter();
  const { journalID } = router.query;
  const currentJournal = journals.find((journal) => journal.id === journalID);

  if (!currentJournal) {
    return <p>Oopsie woopsie :(</p>;
  }

  const { name, destination, description } = currentJournal;

  return (
    <>
      <Wrapper>
        <Heading>{name}</Heading>
        <Destination>in {destination}</Destination>
        <Description>&quot;{description}&quot;</Description>
        <h3>Your highlights:</h3>
        {products &&
          products.map((product) => (
            <EntryWrapper key={product.id}>
              <StyledImage
                src={product.image.url}
                alt="idk"
                width="300"
                height="200"
              />
              <p>{product.text}</p>
            </EntryWrapper>
          ))}
        <EntryForm addProduct={addProduct} />
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

const Heading = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0;
  background-color: #d9ff80;
  padding: 10px;
  width: 30%;
  text-align: center;
  border: 2px solid black;
  box-shadow: -4px 4px black;
`;

const Destination = styled.h2`
  background-color: #d9ff80;
  padding: 5px 15px;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;

const BackToJournalsButton = styled(Link)`
  background-color: #d9ff80;
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
  background-color: #db9d47;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;

const StyledImage = styled.img`
  border-radius: 5px;
  box-shadow: -4px 4px 5px #000;
`;
