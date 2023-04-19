import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [toDos, setToDos] = useState([]);
  const [tripData, setTripData] = useState({
    name: "Camping Trip",
    where: "Denmark",
    when: "2023-05-05",
    who: ["Me"],
  });

  const [journals, setJournals] = useState([
    {
      name: "Camping",
      destination: "Denmark",
      description: "So fun",
      id: "1234",
    },
  ]);
  const [journalData, setJournalData] = useState({
    name: "",
    destination: "",
    description: "",
  });

  const [entries, setEntries] = useState([]);

  function addEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }
  console.log("entries:", entries);
  const [selectedFriend, setSelectedFriend] = useState("Me");

  function handleAddToDo(item) {
    setToDos((toDos) => [
      ...toDos,
      { id: uid(), todo: item, section: selectedFriend },
    ]);
  }

  function handleDeleteToDo(id) {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDos);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        onAddToDo={handleAddToDo}
        onDeleteToDo={handleDeleteToDo}
        toDos={toDos}
        tripData={tripData}
        setTripData={setTripData}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        journalData={journalData}
        setJournalData={setJournalData}
        journals={journals}
        setJournals={setJournals}
        addEntry={addEntry}
        entries={entries}
      />
    </>
  );
}
