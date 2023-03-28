import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

function NewTrip() {
  const [step, setStep] = useState(true);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    router.push("/");
  }
  console.log(step);
  return (
    <>
      <h1>Plan your next Trip</h1>
      <StyledForm onSubmit={handleSubmit}>
        {step ? (
          <>
            {" "}
            <label htmlFor="name">Name your trip:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="where">Where are we going?</label>
            <input type="text" id="where" name="where" required />
            <label htmlFor="when">When are we going?</label>
            <input type="date" id="when" name="when" required />
            <button onClick={() => setStep(!step)}>Next Step</button>
          </>
        ) : (
          <>
            {" "}
            <label htmlFor="who">Who is coming?</label>
            <input type="text" id="who" name="who" required />
            <label htmlFor="what">What do we need?</label>
            <input type="text" id="what" name="what" required />
            <button type="submit">Create new Trip</button>
          </>
        )}
      </StyledForm>
      <Link href="/">Dashboard</Link>
    </>
  );
}

export default NewTrip;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
