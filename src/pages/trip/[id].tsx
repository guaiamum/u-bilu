import Trip from "../../features/trip/Trip";
import { useRouter } from 'next/router'
import { useAppSelector } from "../../app/hooks";
import { selectTripById } from "../../features/trip/tripSlice";

export default function TripPage() {
  const router = useRouter()
  let { id } = router.query

  if (!id || typeof id !== 'string') {
    return null
  }

  const trip = useAppSelector(selectTripById(id))

  return (trip ?
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <Trip {...trip} />
    </main>
    : <>No trip found</>
  );
}
