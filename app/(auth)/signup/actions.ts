'use server';

import bcrypt from 'bcrypt';
import type { User } from '@prisma/client';

import type { ErrorResponse } from '@/app/types';
import prismadb from '@/lib/prismadb';

import type { SignUp } from './schema';

async function signUp({
  email,
  name,
  password,
}: SignUp): Promise<User | ErrorResponse> {
  try {
    const foundUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (foundUser) {
      return { error: { message: 'Email taken' } };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      },
    });

    return user;
  } catch (error) {
    return { error: { message: 'Something went wrong' } };
  }
}

export { signUp };
