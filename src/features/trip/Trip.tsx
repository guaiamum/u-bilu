import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PeopleList, { WithAddButton } from "../../features/people/PeopleList";
import { selectAllPeople, selectPersonById } from "../../features/people/peopleSlice";
import { addPersonToTrip, removePersonFromTrip } from "../../features/trip/tripSlice";

const intlArgs: any = [
  [],
  {
    day: "numeric",
    month: "short",
    year: "2-digit",
  },
];

const tripNoCopies = ["IDA", "VOLTA"];

export type Trip = {
  id: string,
  date: number,
  tripNo: number,
  peopleIds: string[]
}

const Trip: React.FC<Trip> = ({
  id,
  date,
  tripNo,
  peopleIds,
}) => {
  const dispatch = useAppDispatch()
  const people = useAppSelector(selectAllPeople)
  const getPersonInfo = useAppSelector(selectPersonById)

  const humanDate = Intl.DateTimeFormat(...intlArgs).format(date);
  const peopleInTripInfo = peopleIds.map(getPersonInfo);

  const onRemovePersonFromTrip = (personId) => {
    dispatch(removePersonFromTrip({ tripId: id, personId }))
  }
  const onAddPersonToTrip = (personId) => {
    dispatch(addPersonToTrip({ tripId: id, personId }))
  }

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <h1 className="text-4xl font-semibold">Today - {humanDate}</h1>
      <h2 className="text-2xl">{tripNoCopies[tripNo]}</h2>

      <PeopleList people={peopleInTripInfo} sideActionCTA={'-'} actionCbx={onRemovePersonFromTrip} />

      <WithAddButton people={people} blockListIds={peopleIds} sideActionCTA={'+'} actionCbx={onAddPersonToTrip} />
    </main>
  );
}

export default Trip;