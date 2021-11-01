import Link from 'next/link'
import { useSelector } from 'react-redux';
import { getHumanDate } from '../features/trip/Trip';
import { selectAllTrips } from '../features/trip/tripSlice';

export default function Home() {
  const allTrips = useSelector(selectAllTrips)

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      {allTrips
        .reverse()
        .map(({ id, date, peopleIds }) => {
          const linkContent = <span className="flex justify-between">Go to trip {getHumanDate(date)} <strong>{peopleIds.length}</strong></span>
          return (
            <Link href={`/trip/${id}`}>
              {linkContent}
            </Link>
          );
        })}
    </main>
  );
}
