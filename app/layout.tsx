import type { PropsWithChildren } from 'react';

import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix Clone',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
