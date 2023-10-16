import Link from 'next/link';

import SocialAuth from '@/components/SocialAuth';

import { redirectWithSession } from '../actions';

import Form from './components/Form';

export default async function SignIn() {
  await redirectWithSession();

  return (
    <>
      <h2 className="text-4xl font-semibold text-white mb-9">Sign In</h2>
      <Form />
      <SocialAuth />
      <p className="mt-12 text-neutral-500">
        First time using Netflix?
        <Link
          href="/signup"
          className="ml-1 text-white cursor-pointer hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
