import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [toDos, setToDos] = useState([]);
  const [tripData, setTripData] = useState({
    name: "Camping",
    where: "Denmark",
    when: "2023-05-06",
    who: "",
  });
  const [selectedFriend, setSelectedFriend] = useState(tripData.who[0]);

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
      />
    </>
  );
}
