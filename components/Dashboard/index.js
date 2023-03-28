import Link from "next/link";

function Dashboard() {
  return (
    <>
      <button>To-do-board</button>
      <Link href="/new-trip">New Trip</Link>
    </>
  );
}

export default Dashboard;
