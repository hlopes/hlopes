'use client';

import { BiChevronDown } from 'react-icons/bi';
import { BsPlayFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@prisma/client';

import useInfoModal from '@/hooks/useInfoModal';

import FavoriteButton from './FavoriteButton';

type MovieCardProps = {
  movie: Movie;
  isFavorite: boolean;
};

export default function MovieCard({
  movie,
  isFavorite = false,
}: MovieCardProps) {
  const { openModal } = useInfoModal();

  return (
    <article className="group bg-zinc-900 col-span relative h-full md:h-[12vw]">
      <Image
        className="invisible md:visible object-cover w-full transition delay-300 rounded-md shadow-xl cursor-pointer duration-150 group-hover:placeholder-opacity-90 md:group-hover:opacity-0 h-[26vw] md:h-[12vw]"
        src={movie.thumbnailUrl}
        alt="thumbnail"
        width="350"
        height="185"
      />
      <div className="absolute top-0 z-10 visible w-full transition delay-300 md:scale-0 md:opacity-0 duration md:invisible md:group-hover:scale-110 md:group-hover:-translate-y-[6vw] md:group-hover:translate-x-[2vw] md:group-hover:opacity-100 md:group-hover:visible">
        <Image
          className="object-cover transition shadow-xl cursor-pointer duration rounded-t-md w-full h-[20vw] md:h-[12vw]"
          src={movie.thumbnailUrl}
          alt="thumbnail"
          width="350"
          height="185"
        />
        <div className="absolute z-10 flex items-center justify-between w-full p-2 transition shadow-md bg-zinc-800 lg:p-4 rounded-b-md md:flex-col md:items-start">
          <div className="flex items-center justify-between w-full gap-2 md:gap-3">
            <Link
              className="flex items-center justify-center w-6 h-6 transition bg-white rounded-full lg:w-10 lg:h-10 hover:bg-neutral-300"
              href={`/watch/${movie.id}`}>
              <BsPlayFill className="button-icon" />
            </Link>
            <FavoriteButton movieId={movie.id} isFavorite={isFavorite} />
            <button
              onClick={() => openModal(movie)}
              className="flex items-center justify-center w-6 h-6 ml-auto transition border-2 border-white rounded-full group/item lg:w-10 lg:h-10 hover:border-neutral-300">
              <BiChevronDown className="text-white group-hover/item:text-neutral-300 button-icon" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 md:flex-col md:mt-4 md:items-start">
            <p className="font-semibold text-green-400">
              New <span className="text-white">2023</span>
            </p>
            <p className="text-white text-[10px] lg:text-sm hidden sm:inline">
              {movie.duration}
            </p>
            <p className="text-white text-[10px] lg:text-sm hidden sm:inline">
              {movie.genre}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
