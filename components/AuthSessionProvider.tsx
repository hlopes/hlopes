'use client';

import type { PropsWithChildren } from 'react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type AuthSessionProviderProps = PropsWithChildren & {
  session: Session | null;
};

export default function AuthSessionProvider({
  children,
  session,
}: AuthSessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
