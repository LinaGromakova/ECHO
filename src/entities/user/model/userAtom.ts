import type { User } from '@supabase/supabase-js';
import { atomWithStorage } from 'jotai/utils';

const userAtom = atomWithStorage<User | null>('user', null);
export default userAtom;
