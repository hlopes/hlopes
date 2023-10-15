import SignOutButton from '@/components/SignOutButton';

import { redirectWithoutSession } from './actions';

export default async function Home() {
  await redirectWithoutSession();

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <SignOutButton />
    </>
  );
}
