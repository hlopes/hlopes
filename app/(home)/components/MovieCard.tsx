'use client';

import { BsPlayFill } from 'react-icons/bs';
import Image from 'next/image';
import type { Movie } from '@prisma/client';

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="group bg.-zinc-900 col-span relative h-[12w]">
      <Image
        className="object-cover w-full transition delay-300 rounded-md shadow-xl cursor-pointer duration group-hover:placeholder-opacity-90 sm:group-hover:opacity-0 h-[12w]"
        src={movie.thumbnailUrl}
        alt="thumbnail"
        width="350"
        height="185"
      />
      <div className="absolute top-0 z-10 invisible w-full transition delay-300 scale-0 opacity-0 duration sm:visible group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <Image
          className="object-cover transition shadow-xl cursor-pointer duration rounded-t-md w-full h-[12vw]"
          src={movie.thumbnailUrl}
          alt="thumbnail"
          width="350"
          height="185"
        />
        <div className="absolute z-10 w-full p-2 transition shadow-md bg-zinc-800 lg-p-4 rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300"
              onClick={() => {}}>
              <BsPlayFill size={30} />
            </div>
          </div>

          <p className="mt-4 font-semibold text-green-400">
            {' '}
            New <span className="text-white">2023</span>
          </p>

          <div className="flex items-center gap-2 mt-4">
            <p className="text-white text-[10px] lg:text-sm">
              {movie.duration}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
