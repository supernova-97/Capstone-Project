import { useState } from "react";
import { uid } from "uid";
import styled from "styled-components";

const initialProduct = { image: {}, text: "" };

function EntryForm({ addProduct }) {
  const [product, setProduct] = useState(initialProduct);
  const REACT_APP_CLOUDINARY_CLOUD = "dkoh6qivp";
  const REACT_APP_CLOUDINARY_PRESET = "CoPlan";

  function handleSubmit(event) {
    event.preventDefault();
    addProduct({ ...product, id: uid() });
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });

    console.log(product);
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

      setProduct({ ...product, image: await response.json() });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="image">Choose a photo:</label>
      <input type="file" id="image" name="image" onChange={uploadImage} />
      <label htmlFor="text">Tell us about this photo:</label>
      <textarea
        name="text"
        id="text"
        rows={3}
        cols={20}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default EntryForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
