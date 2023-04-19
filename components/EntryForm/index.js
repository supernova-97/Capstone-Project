import { useState } from "react";
import { uid } from "uid";
import styled from "styled-components";

function EntryForm({ addEntry, journals, journalID }) {
  const [entry, setEntry] = useState({ image: {}, text: "" });
  const REACT_APP_CLOUDINARY_CLOUD = "dkoh6qivp";
  const REACT_APP_CLOUDINARY_PRESET = "CoPlan";

  const currentJournal = journals.find((journal) => journal.id === journalID);

  function handleSubmit(event) {
    event.preventDefault();
    addEntry({ ...entry, id: uid(), entryId: currentJournal.name });
    event.target.reset();
  }

  function handleChange(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  }

  const uploadImage = async (event) => {
    try {
      const url = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD}/upload`;
      const image = event.target.files[0];

      const fileData = new FormData();
      fileData.append("file", image);
      fileData.append("upload_preset", REACT_APP_CLOUDINARY_PRESET);

      const response = await fetch(url, {
        method: "POST",
        body: fileData,
      });

      setEntry({ ...entry, image: await response.json() });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="image">Choose a photo:</StyledLabel>
      <input
        type="file"
        id="image"
        name="image"
        onChange={uploadImage}
        required
      />
      <StyledLabel htmlFor="text">Tell us about this photo:</StyledLabel>
      <StyledTextarea
        name="text"
        id="text"
        rows={3}
        cols={20}
        onChange={handleChange}
        required
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export default EntryForm;

const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 40px;
  background-color: #fef6e4;
  color: #001858;
  box-shadow: -4px 4px black;
`;

const StyledLabel = styled.label`
  margin: 10px;
`;

const StyledTextarea = styled.textarea`
  margin: 5px;
`;

const StyledButton = styled.button`
  background-color: #f582ae;
  border: 1px solid black;
  padding: 5px;
  width: 30%;
`;
