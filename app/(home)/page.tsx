import Navbar from '@/components/Navbar';

import { getFavorites } from './actions/favorites';
import { getMovies, getRandomMovie } from './actions/movies';
import Billboard from './components/Billboard';
import MoreInfoModal from './components/MoreInfoModal';
import MovieList from './components/MovieList';

export default async function Home() {
  const randomMovie = await getRandomMovie();

  const movies = await getMovies();

  const favorites = await getFavorites();

  return (
    <>
      <Navbar />
      <Billboard movie={randomMovie} />
      <div className="pb-40">
        <MovieList title="Trending Now" movies={movies} />
        <MovieList title="MyList" movies={favorites} />
      </div>
      <MoreInfoModal favorites={favorites} />
    </>
  );
}
