import { useRouter } from "next/router";

function JournalDetail({ journals }) {
  const router = useRouter();
  const { journalID } = router.query;
  console.log("router:", journalID);
  console.log("journals in slug", journals);
  const currentJournal = journals.find((journal) => journal.id === journalID);
  console.log("currentJournal:", currentJournal);

  if (!currentJournal) {
    return <p>Oopsie woopsie :(</p>;
  }

  const { name, destination, description } = currentJournal;

  return (
    <>
      <h1>{name}</h1>
      <h2>{destination}</h2>
      <p>{description}</p>
    </>
  );
}

export default JournalDetail;
