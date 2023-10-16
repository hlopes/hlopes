'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@/components/Input';

import { signUp } from '../actions';
import type { SignUp } from '../schema';
import { signUpSchema } from '../schema';

export default function Form() {
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
    await signUp(data);

    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });

    reset();
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
    </form>
  );
}
