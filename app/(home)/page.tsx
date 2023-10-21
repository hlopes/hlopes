import Navbar from '@/components/Navbar';

import getMovies from './actions/getMovies';
import getRandomMovie from './actions/getRandomMovie';
import Billboard from './components/Billboard';
import MovieList from './components/MovieList';

export default async function Home() {
  const randomMovie = await getRandomMovie();

  const movies = await getMovies();

  return (
    <>
      <Navbar />
      <Billboard movie={randomMovie} />
      <div className="pb-40">
        <MovieList title="Trending Now" movies={movies} />
      </div>
    </>
  );
}
