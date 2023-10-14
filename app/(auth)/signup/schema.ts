import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email().min(5),
  password: z.string().min(3),
});

type SignUp = z.infer<typeof signUpSchema>;

export type { SignUp };
export { signUpSchema };
