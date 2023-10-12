import type { PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';

import './globals.css';

const font = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Easy Money',
  description: 'Money Tracker',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
