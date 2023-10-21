import { getServerSession } from 'next-auth';

import prismadb from '@/lib/prismadb';

export default async function getCurrentUser() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    throw new Error('No session for the user');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error('No User found');
  }

  return currentUser;
}
