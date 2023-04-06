import Dashboard from "../components/Dashboard";

export default function Home({ tripData }) {
  return (
    <main>
      <Dashboard tripData={tripData} />
    </main>
  );
}
