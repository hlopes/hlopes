import { create } from 'zustand';
import type { Movie } from '@prisma/client';

type ModalStore = {
  movie?: Movie;
  openModal(movie: Movie): void;
  closeModal(): void;
};

const useInfoModal = create<ModalStore>((set) => ({
  movie: undefined,
  openModal: (movie: Movie) => set({ movie }),
  closeModal: () => set({ movie: undefined }),
}));

export default useInfoModal;
