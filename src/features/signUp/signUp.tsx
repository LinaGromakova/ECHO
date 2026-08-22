import { getUserProfile } from '@/entities/user';
import { supabase } from '@/shared/lib';

export default async function signUp(inputData: {
  username: string;
  email: string;
  password: string;
}) {
  const { email, password, username } = inputData;
  const { data: authData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });
  return getUserProfile(authData, error);
}
