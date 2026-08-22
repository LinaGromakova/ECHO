import { signOut } from '@/features';
import { ButtonMain } from '@/shared/ui';

const HomePage = () => {
  return (
    <ButtonMain
      onClickHandler={() => signOut()}
      text='logout'
    ></ButtonMain>
  );
};
export default HomePage;
