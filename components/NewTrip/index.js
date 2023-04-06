import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";

function NewTrip({ onAddToDo, tripData, setTripData }) {
  const [formToDos, setFormToDos] = useState([]);
  let toDoInput = { todo: "" };
  const toDoInputRef = useRef(null);
  const [step, setStep] = useState(true);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      tripData.name === "" ||
      tripData.where === "" ||
      tripData.when === 0 ||
      tripData.who === ""
    ) {
      return alert("Missing info!");
    }

    formToDos.map((todo) => {
      onAddToDo(todo.todo);
    });

    setTripData({
      ...tripData,
      who: separateFriends(e.target.who.value, tripData.who),
    });

    router.push("/");
  }

  function separateFriends(who) {
    let separatedArray = ["Me", ...who.split(", ")];

    return separatedArray;
  }

  function handleToDoInput(e) {
    toDoInput.todo = e.target.value;
  }

  function handleAddToDo() {
    setFormToDos([...formToDos, { ...toDoInput }]);
    toDoInputRef.current.value = "";
  }

  function handleFormInput(e) {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  }

  function nextStep() {
    if (tripData.name === "") {
      return alert("Missing trip name!");
    } else if (tripData.where === "") {
      return alert("Missing destination!");
    } else if (tripData.when === "") {
      return alert("Missing date!");
    } else {
      setStep(!step);
    }
  }

  return (
    <>
      <FormWrapper>
        <StyledHeading>Plan your next Trip</StyledHeading>

        <StyledForm onSubmit={handleSubmit}>
          {step ? (
            <FormStepOne nextStep={nextStep} onFormInput={handleFormInput} />
          ) : (
            <FormStepTwo
              nextStep={nextStep}
              onFormInput={handleFormInput}
              onAddToDo={handleAddToDo}
              formToDos={formToDos}
              onToDoInput={handleToDoInput}
              toDoInputRef={toDoInputRef}
            />
          )}
        </StyledForm>
      </FormWrapper>
    </>
  );
}

export default NewTrip;

const StyledHeading = styled.h1`
  background-color: #d9ff80;
  padding: 10px;
  box-shadow: -3px 3px black;
`;

const FormWrapper = styled.div`
  display: flex;
  margin: 30px;
  flex-direction: column;
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 2px solid black;
  padding: 20px;
  box-shadow: -3px 3px black;
`;
