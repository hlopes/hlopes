import Image from 'next/image';
import Link from 'next/link';

import SubtlePrism from './components/SubtlePrism';

export default async function Home() {
  return (
    <div className="bg-foreground h-[100dvh]">
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="gap-4 columns-1 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex items-center justify-center max-w-full max-h-full">
                <SubtlePrism />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 text-base font-bold tracking-widest uppercase">
              Hugo Lopes
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Hello, I'm a Front-end Developer based in Coimbra/Portugal.
            </p>
            <button
              className="z-10 px-3 py-2 mt-6 text-sm font-semibold text-black transition bg-white border border-white rounded-lg pointer hover:bg-white/10 disabled:bg-slate-500 md:mt-4"
              disabled>
              Check out my CV
            </button>
          </div>
          <Link
            href={`/?photoId=id`}
            as={`/pid`}
            shallow
            className="relative block w-full mb-5 after:content group cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image
              alt="todo"
              className="transition transform rounded-lg brightness-90 will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src={`https://res.cloudinary.com/image/upload/c_scale,w_720/public_id.format`}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
