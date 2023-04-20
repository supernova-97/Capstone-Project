import { useRouter } from "next/router";
import JournalForm from "../../components/JournalForm";
import styled from "styled-components";
import Link from "next/link";
import { uid } from "uid";

function Form({ journalData, setJournalData, journals, setJournals }) {
  const router = useRouter();

  function handleJournalFormInput(e) {
    setJournalData({
      ...journalData,
      [e.target.name]: e.target.value,
    });
  }

  function handleJournalSubmit() {
    setJournals([...journals, { id: uid(), ...journalData }]);
    setJournalData({ name: "", destination: "", description: "" });
    router.push("/journal");
  }

  return (
    <>
      <JournalForm
        onJournalFormInput={handleJournalFormInput}
        onJournalSubmit={handleJournalSubmit}
      />
      <BackToJournalsLink href="/journal">back to Journals</BackToJournalsLink>
    </>
  );
}

export default Form;

const BackToJournalsLink = styled(Link)`
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
