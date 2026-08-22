import { userAtom } from '@/entities/user';
import { signUp, signIn } from '@/features';
import { ButtonMain, HeadingMain, InputMain } from '@/shared/ui';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router';

const FormAuth = ({
  title,
  actionType,
}: {
  title: string;
  actionType: 'signIn' | 'signUp';
}) => {
  const [dataAuth, setDataAuth] = useState({
    username: '',
    email: '',
    password: '',
  });
  function handlerChange(
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    field,
  ) {
    setDataAuth((prev) => ({ ...prev, [field]: e.target.value }));
  }
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  async function handlerSubmit() {
    const response =
      actionType === 'signIn' ? await signIn(dataAuth) : await signUp(dataAuth);

    if (response.error || !response.data?.profile) {
      console.error('Ошибка авторизации:', response.error);
      return response.error;
    }
    const profile = response.data.profile;
    setUser(profile);
    navigate('/');
  }

  return (
    <form
      action='#'
      className='bg-zinc-950 p-5 flex flex-col justify-center 
      items-center w-1/3 text-white h-100 relative m-auto'
      onSubmit={(e) => e.preventDefault()}
    >
      <HeadingMain title={title}></HeadingMain>
      <InputMain
        type='text'
        name='username'
        label='Name'
        value={dataAuth.username}
        onChangeHandler={(e) => handlerChange(e, 'username')}
      ></InputMain>
      <InputMain
        type='email'
        name='email'
        label='Email'
        value={dataAuth.email}
        onChangeHandler={(e) => handlerChange(e, 'email')}
      ></InputMain>
      <InputMain
        type='password'
        name='password'
        label='password'
        value={dataAuth.password}
        onChangeHandler={(e) => handlerChange(e, 'password')}
      ></InputMain>
      <ButtonMain
        text={title}
        onClickHandler={() => handlerSubmit()}
      ></ButtonMain>
    </form>
  );
};
export default FormAuth;
