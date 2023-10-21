'use server';

import prismadb from '@/lib/prismadb';

export default async function getRandomMovie() {
  const movieCount = await prismadb.movie.count();

  const randomIndex = Math.floor(Math.random() * movieCount);

  const [randomMovie] = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return randomMovie;
}
