import { supabase } from '@/shared/lib';

export default async function signIn(inputData) {
  const { email, password } = inputData;
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
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
