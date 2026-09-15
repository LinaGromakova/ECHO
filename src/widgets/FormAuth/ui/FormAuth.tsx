import { userAtom } from '@/entities/user';
import { signUp, signIn } from '@/features';
import { ButtonMain, HeadingMain, InputMain } from '@/shared/ui';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  INPUTS_SIGN_IN,
  INPUTS_SIGN_UP,
  type AuthFormData,
} from './FormAuth.config';
import type { InputConfig } from './FormAuth.config';
import updateInputForm from '../model/updateInputForm';
import handlerSubmitForm from '../model/handlerSubmitForm';

const FormAuth = ({
  title,
  actionType,
}: {
  title: string;
  actionType: 'signIn' | 'signUp';
}) => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const [dataAuth, setDataAuth] = useState<AuthFormData>({
    username: '',
    email: '',
    password: '',
  });
  const applyFunc = actionType === 'signIn' ? signIn : signUp;
  const INPUTS = actionType === 'signIn' ? INPUTS_SIGN_IN : INPUTS_SIGN_UP;
  return (
    <form
      action='#'
      className='bg-zinc-950 p-5 flex flex-col justify-center 
      items-center w-1/3 text-white h-100 relative m-auto'
      onSubmit={(e) => e.preventDefault()}
    >
      <HeadingMain title={title}></HeadingMain>
      {INPUTS.map((input: InputConfig, idx) => {
        return (
          <InputMain
            key={idx}
            type={input.type}
            name={input.name}
            label={input.label}
            value={dataAuth[input.name] ?? ''}
            onChangeHandler={(e) => updateInputForm(e, input.name, setDataAuth)}
          ></InputMain>
        );
      })}
      <ButtonMain
        text={title}
        type='submit'
        onClickHandler={() =>
          handlerSubmitForm(applyFunc, dataAuth, setUser, navigate)
        }
      ></ButtonMain>
    </form>
  );
};
export default FormAuth;
