import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { supabase } from '@/shared/lib';
import userAtom from '../model';

const useAuthInit = () => {
  const [isAuth, setIsAuth] = useState(false);
  const setUser = useSetAtom(userAtom);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user.id) {
          setIsAuth(true);
          setIsLoading(false);
          return;
        } else {
          setUser(null);
          setIsLoading(false);
          setIsAuth(false);
        }
        setIsLoading(false);
      },
    );
    return () => {
      subscription.subscription.unsubscribe();
    };
  }, [setUser]);
  return { isAuth, isLoading };
};

export default useAuthInit;
