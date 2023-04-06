import styled from "styled-components";

function Countdown({ tripData }) {
  const currentDate = new Date();
  const currentDateSeconds = currentDate.getTime();

  const tripTime = new Date(tripData.when);
  const tripTimeAsNumber = tripTime.getTime();

  const difference = tripTimeAsNumber - currentDateSeconds;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  console.log("days:", days);

  return (
    <>
      <StyledCountdown>{days} days left until</StyledCountdown>
      <StyledTripName>{tripData.name}</StyledTripName>
    </>
  );
}
export default Countdown;

const StyledCountdown = styled.p`
  font-weight: bold;
  margin: 30px 0 0 0;
`;

const StyledTripName = styled.p`
  margin: 5px;
  font-size: 25px;
`;
