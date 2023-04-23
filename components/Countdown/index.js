import styled from "styled-components";

function Countdown({ tripData }) {
  const currentDate = new Date();
  const currentDateInSeconds = currentDate.getTime();

  const tripTime = new Date(tripData.when);
  const tripTimeInSeconds = tripTime.getTime();

  const difference = tripTimeInSeconds - currentDateInSeconds;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return (
    <CountdownWrapper>
      <StyledCountdown>{days} days left until</StyledCountdown>
      <StyledTripName>{tripData.name}</StyledTripName>
    </CountdownWrapper>
  );
}
export default Countdown;

const StyledCountdown = styled.p`
  background-color: #fff;
  color: #000;
  font-weight: bold;
  margin: 0;
`;

const StyledTripName = styled.p`
  background-color: #fff;
  color: #000;
  margin: 0;
  font-size: 25px;
`;

const CountdownWrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: -4px 6px black;
`;
