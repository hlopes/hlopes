'use client';

import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';

import { addFavorite, removeFavorite } from '../actions/favorites';

type FavoriteButtonProps = {
  movieId: string;
  isFavorite: boolean;
};

export default function FavoriteButton({
  movieId,
  isFavorite,
}: FavoriteButtonProps) {
  return (
    <div
      className="flex items-center justify-center w-6 h-6 transition border-2 border-white rounded-full cursor-pointer group/item lg:w-10 lg:h-10 hover:border-neutral-300"
      onClick={() =>
        isFavorite ? removeFavorite(movieId) : addFavorite(movieId)
      }>
      {isFavorite ? (
        <AiOutlineCheck className="text-white" size="25" />
      ) : (
        <AiOutlinePlus className="text-white" size="25" />
      )}
    </div>
  );
}
