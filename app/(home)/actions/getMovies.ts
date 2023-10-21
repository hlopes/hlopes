'use server';

import prismadb from '@/lib/prismadb';

export default async function getMovies() {
  return prismadb.movie.findMany();
}
