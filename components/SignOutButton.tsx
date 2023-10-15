'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button className="w-full h-10 bg-white" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
