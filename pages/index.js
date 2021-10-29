import PeopleList, {
  WithAddButton,
  peopleArray,
} from "../components/People/PeopleList";

const intlArgs = [
  [],
  {
    day: "numeric",
    month: "short",
    year: "2-digit",
  },
];

const tripNoCopies = ["IDA", "VOLTA"];

export default function Home({
  date = Date.now(),
  tripNo = 0,
  peopleIds = ["0ab"],
}) {
  const humanDate = Intl.DateTimeFormat(...intlArgs).format(date);
  const peopleInTripInfo = peopleIds.map((personId) =>
    peopleArray.find(({ id }) => id === personId)
  );

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <h1 className="text-4xl font-semibold">Today - {humanDate}</h1>
      <h2 className="text-2xl">{tripNoCopies[tripNo]}</h2>

      <PeopleList people={peopleInTripInfo} />

      <WithAddButton blockListIds={peopleIds} />
    </main>
  );
}
