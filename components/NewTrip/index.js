import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";

function NewTrip() {
  const [step, setStep] = useState(true);
  const [data, setData] = useState({
    name: "",
    where: "",
    when: 0,
    who: "",
  });

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data", data);

    if (data.name === "" || data.where === "" || data.when === 0) {
      return alert("Missing info!");
    }
    router.push("/");
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function nextStep() {
    setStep(!step);
  }
  console.log("data", data);
  console.log("step", step);
  return (
    <>
      <h1>Plan your next Trip</h1>
      <StyledForm onSubmit={handleSubmit}>
        {step ? (
          <FormStepOne nextStep={nextStep} handleChange={handleChange} />
        ) : (
          <FormStepTwo nextStep={nextStep} handleChange={handleChange} />
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
