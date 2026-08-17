import { supabase } from "@/shared/lib";

export default async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
