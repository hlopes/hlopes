import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';

export default async function Profiles() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl text-center text-white md:text-6xl">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <Link href="/">
            <div className="flex-row mx-auto group w-44">
              <div className="flex items-center justify-center overflow-auto border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
                <Image
                  src="/images/default-blue.png"
                  alt="profile"
                  width="172"
                  height="172"
                />
              </div>

              <div className="mt-4 text-2xl text-center text-gray-400 ">
                {session?.user?.name}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
