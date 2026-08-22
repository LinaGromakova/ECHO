import { atomWithStorage } from 'jotai/utils';
import type { User as SupabaseUser } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  username: string;
  avatar_url: string | null;
  last_seen_at: string;
  created_at: string;
}
export interface AppUser extends SupabaseUser {
  profile: UserProfile;
}
const userAtom = atomWithStorage<UserProfile | null>('user', null);
export default userAtom;
