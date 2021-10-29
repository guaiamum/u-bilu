import Link from 'next/link'

export default function Home() {
  const lastTripId = '1a'

  return (
    <main className="h-screen bg-gray-800 text-gray-300 text-center p-4">
      <Link href={`/trip/${lastTripId}`}>
          Go to trip
      </Link>
    </main>
  );
}
