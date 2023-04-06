function Countdown({ tripData }) {
  const currentDate = new Date();
  const currentDateSeconds = currentDate.getTime();

  const tripTime = new Date(tripData.when);
  const tripTimeAsNumber = tripTime.getTime();

  const difference = tripTimeAsNumber - currentDateSeconds;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  console.log("days:", days);

  return (
    <>
      <p>{days} days left until</p>
      <p>{tripData.name}</p>
    </>
  );
}
export default Countdown;
