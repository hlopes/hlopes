import type { PropsWithChildren } from 'react';
import Image from 'next/image';

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" alt="logo" width="178" height="48" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-16 py-16 mt-2 bg-black bg-opacity-70 lg:max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
