import { useState } from "react";

function DashboardEdit(tripData, setTripData) {
  const [infoEditing, setInfoEditing] = useState(null);
  const [editInfo, setEditInfo] = useState("");
  const data = tripData.tripData;
  console.log(infoEditing);

  function handleChange(e) {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      {infoEditing === data.name ? (
        <input
          type="text"
          onChange={(e) => setEditInfo(e.target.value)}
          value={editInfo}
          placeholder={data.name}
        />
      ) : (
        <>
          <h2>{data.name}</h2>
          <button onClick={() => setInfoEditing(data.name)}>Edit</button>
        </>
      )}

      <h2>{data.where}</h2>
      <button type="button">Edit</button>
      <h2>{data.when}</h2>
      <button type="button">Edit</button>
      <h2>{data.who}</h2>
      <button type="button">Edit</button>
    </>
  );
}

export default DashboardEdit;

// function handleChange(e) {
//     setTripData({
//       ...tripData,
//       [e.target.name]: e.target.value,
//     });
