import { AiOutlineInfoCircle } from 'react-icons/ai';
import type { Movie } from '@prisma/client';

import PlayButton from './PlayButton';

type BillboardProps = {
  movie: Movie;
};

export default function Billboard({ movie }: BillboardProps) {
  return (
    <section className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[50%]"
        autoPlay
        muted
        loop
        src={movie?.videoUrl}
        poster={movie?.thumbnailUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="h-full text-white text-1-xl md:text-5xl w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-xs md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie.description}
        </p>
        <div className="flex items-center gap-3 mt-3 md:mt-4">
          <PlayButton movieId={movie.id} />
          <button className="flex items-center w-auto px-2 py-1 text-xs text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md-px4 lg:text-lg hover:bg-opacity-20">
            <AiOutlineInfoCircle className="mr-1 button-icon" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
