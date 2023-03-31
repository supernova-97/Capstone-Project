import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";

function NewTrip({ onAddToDo }) {
  //"what" input field
  const [newTripToDos, setNewTripToDos] = useState([]);
  const [formToDos, setFormToDos] = useState([]);
  const whatInputRef = useRef(null);
  //
  const [step, setStep] = useState(true);
  //input fields
  const [data, setData] = useState({
    name: "",
    where: "",
    when: 0,
    who: "",
  });

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      data.name === "" ||
      data.where === "" ||
      data.when === 0 ||
      data.who === ""
    ) {
      return alert("Missing info!");
    }

    formToDos.map((todo) => {
      console.log("formToDos", formToDos);
      console.log("todo.todo", todo.todo);
      onAddToDo(todo.todo);
    });

    router.push("/");
  }

  //functions for the "what" input field

  function handleSaveToDos(e) {
    setNewTripToDos({
      ...newTripToDos,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddClick() {
    setFormToDos([...formToDos, { ...newTripToDos }]);
    whatInputRef.current.value = "";
  }

  //functions for other inputs. data saves all the inputs except "what"
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function nextStep() {
    setStep(!step);
  }

  return (
    <>
      <FormWrapper>
        <StyledHeading>Plan your next Trip</StyledHeading>

        <StyledForm onSubmit={handleSubmit}>
          {step ? (
            <FormStepOne nextStep={nextStep} handleChange={handleChange} />
          ) : (
            <FormStepTwo
              nextStep={nextStep}
              handleChange={handleChange}
              onAddClick={handleAddClick}
              formToDos={formToDos}
              onSaveToDos={handleSaveToDos}
              whatInputRef={whatInputRef}
            />
          )}
        </StyledForm>
      </FormWrapper>
      <DashboardLink href="/">Dashboard</DashboardLink>
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

const DashboardLink = styled(Link)`
  background-color: #d9ff80;
  border: 2px solid black;
  box-shadow: -2px 2px black;
  margin: 25px 10px 0 10px;
  padding: 5px;
  width: 40%;
  text-decoration: none;
  color: black;
  transition: 0.2s ease-out;
  :hover {
    background-color: #db9d47;
  }
`;
