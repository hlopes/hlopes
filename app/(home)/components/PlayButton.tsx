import { BsPlayFill } from 'react-icons/bs';
import Link from 'next/link';

type PlayButtonProps = {
  movieId: string;
};

export default function PlayButton({ movieId }: PlayButtonProps) {
  return (
    <Link
      href={`/watch/${movieId}`}
      className="flex items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded-md md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300">
      <BsPlayFill size={15} />
      Play
    </Link>
  );
}
