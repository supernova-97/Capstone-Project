import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [toDos, setToDos] = useState([]);
  const [tripData, setTripData] = useState({
    name: "D",
    where: "D",
    when: "2023-06-27",
    who: ["D"],
  });

  const [journalData, setJournalData] = useState({
    name: "Camping Trip",
    destination: "Denmark",
    description:
      "“Ich habe gerade einen unglaublichen Campingausflug in Dänemark gemacht! Die Landschaft war atemberaubend und die Campingplätze waren fantastisch. Ich habe eine Woche damit verbracht, die schönsten Strände und Campingplätze zu erkunden und ich kann es kaum erwarten, wiederzukommen! Wenn ihr nach einem Abenteuer sucht, dann ist Dänemark der perfekte Ort zum Campen. Es gibt viele Routen und Themen für Campingausflüge in Dänemark. Egal, ob ihr am Meer oder in den Wäldern campen möchtet, es gibt für jeden etwas dabei. Wenn ihr mehr über das Campen in Dänemark erfahren möchtet, findet ihr auf der Website von VisitDenmark weitere Informationen.”",
  });

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
      />
    </>
  );
}
