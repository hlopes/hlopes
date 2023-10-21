import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

import { getMovieById } from '@/app/(home)/actions/movies';

export default async function Watch({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movie = await getMovieById(movieId);

  return (
    <div className="w-screen h-screen bg-black ">
      <nav className="fixed z-10 flex items-center w-full gap-8 p-4 bg-black bg-opacity-70">
        <Link href="/">
          <AiOutlineArrowLeft className="text-white" size="40" />
        </Link>
        <p className="font-bold text-white text-1xl md:text-3xl">
          <span className="font-light">Watching:</span>
          {movie.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="w-full h-full"
        src={movie.videoUrl}></video>
    </div>
  );
}
