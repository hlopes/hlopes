import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(3),
});

type SignIn = z.infer<typeof signInSchema>;

export type { SignIn };
export { signInSchema };
