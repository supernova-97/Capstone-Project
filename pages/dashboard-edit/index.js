import { useState } from "react";

function DashboardEdit(tripData, setTripData) {
  console.log("trip:", setTripData);
  const data = tripData.tripData;

  function handleChange(e) {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="where">Where:</label>
        <input type="text" id="where" name="where" placeholder={data.where} />
        <label htmlFor="when">Date:</label>
        <input type="date" id="when" name="when" placeholder={data.when} />
        <label htmlFor="who">Who:</label>
        <input type="text" id="who" name="who" placeholder={data.who} />
      </form>
      <p>{data.name}</p>
    </>
  );
}

export default DashboardEdit;
