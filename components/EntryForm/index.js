import { useState } from "react";
import { uid } from "uid";
import styled from "styled-components";

function EntryForm({ addEntry }) {
  const [entry, setEntry] = useState({ image: {}, text: "" });
  const REACT_APP_CLOUDINARY_CLOUD = "dkoh6qivp";
  const REACT_APP_CLOUDINARY_PRESET = "CoPlan";

  function handleSubmit(event) {
    event.preventDefault();
    addEntry({ ...entry, id: uid() });
    event.target.reset();
  }

  function handleChange(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  }

  async function uploadImage(e) {
    try {
      const url = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD}/upload`;
      const image = e.target.files[0];

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
  }

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
        rows={5}
        cols={25}
        onChange={handleChange}
        required
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export default EntryForm;

const StyledForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 40px;
  border: 2px solid black;
  color: #001858;
  box-shadow: -4px 4px black;
`;

const StyledLabel = styled.label`
  margin: 10px;
`;

const StyledTextarea = styled.textarea`
  margin: 5px;
  background-color: white;
  color: #000;
`;

const StyledButton = styled.button`
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: 1px solid black;
  padding: 5px;
  width: 30%;
`;
