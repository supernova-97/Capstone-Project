import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [toDos, setToDos] = useState([]);

  function handleAddToDo(item) {
    setToDos((toDos) => [...toDos, { id: uid(), todo: item }]);
  }

  function handleDeleteToDo(id) {
    const newToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDos);
  }

  const [tripData, setTripData] = useState({
    name: "",
    where: "",
    when: 0,
    who: "",
  });

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
      />
    </>
  );
}
