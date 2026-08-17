import { signUp, signIn } from '@/features';
import { ButtonMain, HeadingMain, InputMain } from '@/shared/ui';

const FormAuth = ({
  title,
  actionType,
}: {
  title: string;
  actionType: 'signIn' | 'signUp';
}) => {
  return (
    <form
      action='#'
      className='bg-zinc-950 p-5 flex flex-col justify-center 
      items-center w-1/3 text-white h-100 relative m-auto'
      onSubmit={(e) => e.preventDefault()}
    >
      <HeadingMain title={title}></HeadingMain>
      <InputMain type='email'></InputMain>
      <InputMain type='password'></InputMain>
      <ButtonMain
        text={title}
        onClickHandler={() => (actionType === 'signIn' ? signIn() : signUp())}
      ></ButtonMain>
    </form>
  );
};
export default FormAuth;
