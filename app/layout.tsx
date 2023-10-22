import type { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';

import AuthSessionProvider from '@/components/AuthSessionProvider';

import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix Clone',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
