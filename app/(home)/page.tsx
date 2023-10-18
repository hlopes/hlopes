// import { getServerSession } from 'next-auth';

import Navbar from '@/components/Navbar';

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <>
      {/* <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as : {session?.user?.name}</p>
      <SignOutButton /> */}
      <Navbar />
      <div className="bg-gray-500">
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
        <div className="h-96" />
      </div>
    </>
  );
}
