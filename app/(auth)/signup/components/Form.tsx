'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@/components/Input';

import { signUp } from '../actions';
import type { SignUp } from '../schema';
import { signUpSchema } from '../schema';

export default function Form() {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignUp>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUp) => {
    reset();

    const result = await signUp(data);

    if ('error' in result) {
      setErrorMessage(result.error.message);

      return;
    }

    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <Input label="Username" {...register('name')} error={!!errors.name} />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
        />
        <Input
          label="Password"
          type="password"
          {...register('password')}
          error={!!errors.password}
        />
      </div>
      <button
        className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700 aria-disabled:cursor-not-allowed"
        aria-disabled={!isValid}>
        Sign up
      </button>
      {errorMessage ? (
        <p className="mt-4 text-center text-red-600">{errorMessage}</p>
      ) : null}
    </form>
  );
}
