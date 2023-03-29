import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [toDos, setToDos] = useState([]);

  function handleAddToDo(newToDo) {
    setToDos([...toDos, { id: uid(), ...newToDo }]);
  }

  function handleDeleteToDo(index) {
    const newToDos = toDos.filter((_, i) => i !== index);
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
      />
    </>
  );
}
