'use client';

import Image from 'next/image';
import { signOut } from 'next-auth/react';

type AccountMenuProps = {
  visible?: boolean;
};

export default function AccountMenu({ visible }: AccountMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
      <div className="flex flex-col gap-3">
        <div className="flex items-center w-full gap-3 px-3 group/item">
          <Image
            className="w-8 h-8 rounded-md"
            src="/images/default-blue.png"
            alt="user avatar"
            width="32"
            height="32"
          />
          <p className="text-sm text-white group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="h-px my-4 bg-gray-600 border-0" />
        <div
          onClick={() => signOut()}
          className="px-3 text-sm text-center text-white hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}
