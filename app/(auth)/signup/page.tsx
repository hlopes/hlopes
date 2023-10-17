import Link from 'next/link';

import SocialAuth from '@/components/SocialAuth';

import Form from './components/Form';

export default async function SignUp() {
  return (
    <>
      <h2 className="text-4xl font-semibold text-white mb-9">Sign Up</h2>
      <Form />
      <SocialAuth />
      <p className="mt-12 text-center text-neutral-500">
        Already have an account?
        <Link
          href="/signin"
          className="ml-1 text-white cursor-pointer hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
