import styled from "styled-components";

function Countdown({ tripData }) {
  const currentDate = new Date();
  const currentDateInSeconds = currentDate.getTime();

  const tripTime = new Date(tripData.when);
  const tripTimeInSeconds = tripTime.getTime();

  const difference = tripTimeInSeconds - currentDateInSeconds;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

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
