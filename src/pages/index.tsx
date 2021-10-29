import { useAppSelector } from "../app/hooks";
import PeopleList, { WithAddButton } from "../features/people/PeopleList";
import { selectAllPeople, selectPersonById } from "../features/people/peopleSlice";

const intlArgs: any = [
  [],
  {
    day: "numeric",
    month: "short",
    year: "2-digit",
  },
];

const tripNoCopies = ["IDA", "VOLTA"];

export default function Trip({
  date = Date.now(),
  tripNo = 0,
  peopleIds = ["0ab"],
}) {
  const people = useAppSelector(selectAllPeople)
  const getPerson = useAppSelector(selectPersonById)

  const humanDate = Intl.DateTimeFormat(...intlArgs).format(date);
  const peopleInTripInfo = peopleIds.map(getPerson);

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <h1 className="text-4xl font-semibold">Today - {humanDate}</h1>
      <h2 className="text-2xl">{tripNoCopies[tripNo]}</h2>

      <PeopleList people={peopleInTripInfo} />

      <WithAddButton people={people} blockListIds={peopleIds} />
    </main>
  );
}
