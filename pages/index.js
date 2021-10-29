import styles from "../styles/Home.module.css";

export default function Home({ date = Date.now() }) {
  const humanDate = Intl.DateTimeFormat("en-US").format(date);
  return (
    <main className="h-screen bg-gray-800 grid justify-center">
      <h1 className="text-2xl font-semibold text-gray-300">Today - {humanDate}</h1>
    </main>
  );
}
