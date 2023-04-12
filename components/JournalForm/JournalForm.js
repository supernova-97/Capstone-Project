function JournalForm({ onJournalFormInput, onJournalSubmit }) {
  return (
    <>
      <form onSubmit={onJournalSubmit}>
        <label htmlFor="name">Give your trip a name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onJournalFormInput}
        />
        <label htmlFor="destination">Where did you go?</label>
        <input
          type="text"
          name="destination"
          id="destination"
          onChange={onJournalFormInput}
        />
        <label htmlFor="description">Tell us about your trip:</label>
        <input
          type="textarea"
          name="description"
          id="description"
          onChange={onJournalFormInput}
        />
        <button type="submit">Add Journal</button>
      </form>
    </>
  );
}

export default JournalForm;
