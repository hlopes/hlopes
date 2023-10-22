'use client';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import useInfoModal from '@/hooks/useInfoModal';
import type { Movie } from '@/prisma/generated/client';

type MoreInfoButtonProps = {
  movie: Movie;
};

export default function MoreInfoButton({ movie }: MoreInfoButtonProps) {
  const { openModal } = useInfoModal();

  return (
    <button
      onClick={() => openModal(movie)}
      className="flex items-center w-auto px-2 py-1 text-xs text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md-px4 lg:text-lg hover:bg-opacity-20">
      <AiOutlineInfoCircle className="mr-1 button-icon" />
      More Info
    </button>
  );
}
