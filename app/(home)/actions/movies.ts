'use server';

import prismadb from '@/lib/prismadb';

async function getMovies() {
  return prismadb.movie.findMany();
}

async function getRandomMovie() {
  const movieCount = await prismadb.movie.count();

  const randomIndex = Math.floor(Math.random() * movieCount);

  const [randomMovie] = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return randomMovie;
}

async function getMovieById(movieId: string) {
  const movie = await prismadb.movie.findFirst({
    where: {
      id: movieId,
    },
  });

  if (!movie) {
    throw new Error('Movie does not exist');
  }

  return movie;
}

export { getMovieById, getMovies, getRandomMovie };
