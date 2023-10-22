'use server';

import { revalidatePath } from 'next/cache';

import getCurrentUser from '@/actions/getCurrentUser';
import prismadb from '@/lib/prismadb';

async function addFavorite(movieId: string) {
  const currentUser = await getCurrentUser();

  const foundMovie = await prismadb.movie.findUnique({
    where: { id: movieId },
  });

  if (!foundMovie) {
    throw new Error('Invalid movie id');
  }

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser?.email ?? '',
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  });

  revalidatePath('/');

  return updatedUser;
}

async function removeFavorite(movieId: string) {
  const currentUser = await getCurrentUser();

  const foundMovie = await prismadb.movie.findUnique({
    where: { id: movieId },
  });

  if (!foundMovie) {
    throw new Error('Invalid movie id');
  }

  const updatedFavoriteList = currentUser?.favoriteIds.filter(
    (id: string) => id !== movieId
  );

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser.email ?? '',
    },
    data: {
      favoriteIds: updatedFavoriteList,
    },
  });

  revalidatePath('/');

  return updatedUser;
}

async function getFavorites() {
  const currentUser = await getCurrentUser();

  const favorites = await prismadb.movie.findMany({
    where: {
      id: {
        in: currentUser?.favoriteIds,
      },
    },
  });

  return favorites;
}

export { addFavorite, getFavorites, removeFavorite };
