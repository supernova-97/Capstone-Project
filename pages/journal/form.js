import { useRouter } from "next/router";
import JournalForm from "../../components/JournalForm/JournalForm";

function Form({ journalData, setJournalData }) {
  const router = useRouter();

  function handleJournalFormInput(e) {
    setJournalData({
      ...journalData,
      [e.target.name]: e.target.value,
    });
  }

  function handleJournalSubmit(e) {
    e.preventDefault();

    if (
      journalData.name === "" ||
      journalData.destination === "" ||
      journalData.description === ""
    ) {
      return alert("Missing info!");
    }
    setJournalData({ ...journalData });
    router.push("/journal");
  }
  console.log("JournalData:", journalData);
  return (
    <JournalForm
      onJournalFormInput={handleJournalFormInput}
      onJournalSubmit={handleJournalSubmit}
    />
  );
}

export default Form;
