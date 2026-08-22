import { getUserProfile } from '@/entities/user';
import { supabase } from '@/shared/lib';

export default async function signIn(inputData: {
  email: string;
  password: string;
}) {
  const { email, password } = inputData;
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return getUserProfile(authData, error);
}
