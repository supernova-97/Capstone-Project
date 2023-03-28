function NewTrip() {
  return (
    <>
      <h1>Plan your next Trip</h1>
      <form>
        <label htmlFor="name">Name your trip:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="where">Where are we going?</label>
        <input type="text" id="where" name="where" required />
        <label htmlFor="when">When are we going?</label>
        <input type="date" id="when" name="when" required />
        <label htmlFor="who">Who is coming?</label>
        <input type="text" id="who" name="who" required />
        <label htmlFor="what">What do we need?</label>
        <input type="text" id="what" name="what" required />
      </form>
    </>
  );
}

export default NewTrip;
