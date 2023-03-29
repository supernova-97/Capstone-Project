function FormStepOne({ nextStep, handleChange }) {
  return (
    <>
      <label htmlFor="name">Name your trip:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
      />
      <label htmlFor="where">Where are we going?</label>
      <input
        type="text"
        id="where"
        name="where"
        required
        onChange={handleChange}
      />
      <label htmlFor="when">When are we going?</label>
      <input
        type="date"
        id="when"
        name="when"
        required
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next Step</button>
    </>
  );
}

export default FormStepOne;
