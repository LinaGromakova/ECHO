import { ButtonMain } from '@/shared/ui';
import { Outlet, useLocation, useNavigate } from 'react-router';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRootAuthPath = location.pathname === '/auth';
  return (
    <>
      {isRootAuthPath ? (
        <>
          <ButtonMain
            onClickHandler={() => navigate('/auth/login')}
            text='login'
          ></ButtonMain>
          <ButtonMain
            onClickHandler={() => navigate('/auth/register')}
            text='register'
          ></ButtonMain>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default AuthPage;
