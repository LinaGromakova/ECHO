import { debounce } from '@/shared/lib';
import { useEffect, useRef, useState } from 'react';
import type { TargetUserInterface } from '@/shared/types';
import { createNewChat, fetchSearchUsers } from '@/features';
import CircleButton from '@/shared/ui/CircleButton';

const FormNewChat = () => {
  const [value, setValue] = useState('');
  const [targetUsers, setTargetUsers] = useState<TargetUserInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  useEffect(() => {
    const debouncedSearch = debounce((searchStr: string) => {
      fetchSearchUsers(
        searchStr,
        abortControllerRef,
        setTargetUsers,
        setLoading,
      );
    }, 600);
    const trimmed = value.trim();
    if (trimmed !== '') {
      debouncedSearch(trimmed);
    } else {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    }
  }, [value]);

  return (
    <div className='w-full h-dvh bg-zinc-950 fixed inset-0 flex justify-center items-center text-white'>
      <CircleButton
        handlerClick={() => false}
        content='back'
      />

      <div className='relative w-1/4 p-5 border border-white'>
        <input
          type='search'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (e.target.value === '') {
              setTargetUsers([]);
              setLoading(false);
            }
          }}
          placeholder='Поиск друзей по username...'
          className='bg-white text-black w-full p-2 rounded'
        />
        {loading && (
          <p className='text-xs text-yellow-500 mt-1'>Поиск на сервере...</p>
        )}
        <div className='mt-4'>
          {targetUsers.map((targetUser) => (
            <div
              className='flex items-center justify-between py-4 border-b border-zinc-800'
              key={targetUser.id}
            >
              <div className='flex items-center'>
                <div className='w-7 h-7 rounded-full bg-zinc-700 overflow-hidden flex items-center justify-center text-xs font-bold'>
                  {targetUser.userAvatar ? (
                    <img
                      src={targetUser.userAvatar}
                      alt='Avatar URL'
                    />
                  ) : (
                    <p>{targetUser.username.slice(0, 1)}</p>
                  )}
                </div>
                <p className='ml-2'>{targetUser.username}</p>
              </div>
              <button
                type='button'
                className='cursor-pointer bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors'
                onClick={() => {
                  createNewChat(targetUser.id);
                }}
              >
                Написать
              </button>
            </div>
          ))}
          {value && !loading && targetUsers.length === 0 && (
            <p className='text-zinc-500 text-sm mt-3'>Пользователь не найден</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormNewChat;
