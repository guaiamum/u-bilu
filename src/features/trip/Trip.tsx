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

type getHumanDateType = (date: number) => string

export const getHumanDate: getHumanDateType = (date) => Intl.DateTimeFormat(...intlArgs).format(date);

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

  const peopleInTripInfo = peopleIds.map(getPersonInfo);

  const onRemovePersonFromTrip = (personId) => {
    dispatch(removePersonFromTrip({ tripId: id, personId }))
  }
  const onAddPersonToTrip = (personId) => {
    dispatch(addPersonToTrip({ tripId: id, personId }))
  }

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <h1 className="text-4xl font-semibold">{getHumanDate(date)}</h1>
      <h2 className="text-2xl">{tripNoCopies[tripNo]}</h2>

      {/* People in trip */}
      <PeopleList people={peopleInTripInfo} onPersonClick={onRemovePersonFromTrip} sideAddornment="-" />

      {/* People in store */}
      <div className="mt-6" />
      <WithAddButton people={people} blockListIds={peopleIds} onPersonClick={onAddPersonToTrip} sideAddornment="+" />
    </main>
  );
}

export default Trip;