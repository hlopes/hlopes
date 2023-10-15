'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

export default function SocialAuth() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 mt-8">
      <button
        onClick={() => signIn('google', { callbackUrl: '/', redirect: false })}
        className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
        <FcGoogle size={30} />
      </button>
      <button
        onClick={() => signIn('github', { callbackUrl: '/', redirect: false })}
        className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
        <FaGithub size={30} />
      </button>
    </div>
  );
}
