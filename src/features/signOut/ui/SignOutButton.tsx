import { ButtonMain } from '@/shared/ui';
import signOut from '../api/signOut';

const SignOutButton = () => {
  return (
    <ButtonMain
      onClickHandler={() => signOut()}
      text='logout'
    ></ButtonMain>
  );
};
export default SignOutButton;
