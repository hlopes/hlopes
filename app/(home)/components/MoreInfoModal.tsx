'use client';

import { AiOutlineClose } from 'react-icons/ai';

import useInfoModal from '@/hooks/useInfoModal';
import type { Movie } from '@/prisma/generated/client';

import FavoriteButton from './FavoriteButton';
import PlayButton from './PlayButton';

type MoreInfoModalProps = {
  favorites: Movie[];
};

export default function MoreInfoModal({ favorites = [] }: MoreInfoModalProps) {
  const { movie, closeModal } = useInfoModal();

  if (!movie) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto transition duration-300 bg-black bg-opacity-80">
      <div className="relative w-auto max-w-3xl mx-auto overflow-hidden rounded-md animate-fade animate-once animate-duration-600 animate-delay-100 animate-ease-in-out animate-normal animate-fill-both">
        <div className="relative flex-auto bg-zinc-900 drop-shadow-md">
          <div className="relative h-96">
            <video
              className="w-full brightness-[50%] object-cover h-full"
              autoPlay
              muted
              loop
              src={movie.videoUrl}
              poster={movie.thumbnailUrl}
            />
            <button
              onClick={closeModal}
              className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-70">
              <AiOutlineClose className="text-white button-icon" />
            </button>
            <div className="absolute bottom-[10%] left-10">
              <p className="h-full mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {movie?.title}
              </p>
              <div className="flex items-center gap-4">
                <PlayButton movieId={movie.id} />
                <FavoriteButton
                  movieId={movie.id}
                  isFavorite={
                    !!favorites.find((favorite) => favorite.id === movie.id)
                  }
                />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-lg font-semibold text-green-400">New</p>
            <p className="text-lg text-white">{movie.duration}</p>
            <p className="text-lg text-white">{movie.genre}</p>
            <p className="text-lg text-white">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
