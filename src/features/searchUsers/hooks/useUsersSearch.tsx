import { useState, useRef, useEffect } from 'react';
import type { TargetUserInterface } from '@/shared/types';
import fetchSearchUsers from '../api/fetchSearchUsers';
import { debounce } from '@/shared/lib';
const debouncedSearch = debounce(
  (
    searchStr: string,
    signal: AbortSignal,
    setUsers: React.Dispatch<React.SetStateAction<TargetUserInterface[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    fetchSearchUsers(searchStr, signal, setUsers, setIsLoading);
  },
  600,
);
export const useUserSearch = (value: string) => {
  const [searchUsers, setSearchUsers] = useState<TargetUserInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const trimmed = value.trim();
    if (abortControllerRef.current) {
      setIsLoading(false);
      abortControllerRef.current.abort();
    }
    if (trimmed === '' || trimmed.length < 2) {
      setSearchUsers([]);
      setIsLoading(false);
    } else {
      const controller = new AbortController();
      abortControllerRef.current = controller;
      debouncedSearch(trimmed, controller.signal, setSearchUsers, setIsLoading);
    }
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [value]);

  return { searchUsers, isLoading };
};

export default useUserSearch;
