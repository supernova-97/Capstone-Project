import Link from "next/link";

function Dashboard() {
  return (
    <>
      <Link href="/to-do">To-do-board</Link>
      <Link href="/new-trip">New Trip</Link>
    </>
  );
}

export default Dashboard;
