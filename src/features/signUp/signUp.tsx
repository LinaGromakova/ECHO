import { supabase } from '@/shared/lib';

export default async function signUp(inputData) {
  const { email, password, username } = inputData;
  console.log(username);
  const { data: authData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (error || !authData?.user) {
    return { data: null, error: error || new Error('Ошибка регистрации') };
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authData.user.id)
    .single();

  return {
    data: {
      ...authData,
      profile: profileData,
    },
    error: profileError,
  };
}
