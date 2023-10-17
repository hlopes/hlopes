import { getServerSession } from 'next-auth';

import SignOutButton from '@/components/SignOutButton';
import { authOptions } from '@/lib/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as : {session?.user?.name}</p>
      <SignOutButton />
    </>
  );
}
