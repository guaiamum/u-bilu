import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { getHumanDate } from '../features/trip/Trip';
import { selectAllTrips, add } from '../features/trip/tripSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const allTrips = useSelector(selectAllTrips)

  const onAdd = () => (dispatch)(add({
    id: null,
    peopleIds: [],
    date: Date.now(),
    tripNo: null,
  }))
  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      {allTrips
        .map(({ id, date, peopleIds }) => {
          const linkContent = <span className="flex justify-between py-2">Go to trip {getHumanDate(date)} <strong>{peopleIds.length}</strong></span>
          return (
            <Link href={`/trip/${id}`}>
              {linkContent}
            </Link>
          );
        })}
      <footer className="p-4 mt-4 border-t">

        <button className="" onClick={onAdd} >
          + Add Today's Trip
        </button>
      </footer>
    </main>
  );
}
