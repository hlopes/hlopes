import React from 'react';
import type { Movie } from '@prisma/client';

import MovieCard from './MovieCard';

type MovieListProps = {
  title: string;
  movies: Movie[];
};

export default function MovieList({ title, movies = [] }: MovieListProps) {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="px-4 mt-4 space-y-8 md:px-12">
      <div>
        <p className="font-semibold text-white text-md md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
