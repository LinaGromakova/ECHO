import { useAuthInit } from '@/entities/user';
import { Navigate, Outlet, useLocation } from 'react-router';

const Layout = () => {
  const location = useLocation();
  const { isAuth } = useAuthInit();
  if (!isAuth && !location.pathname.startsWith('/auth')) {
    return (
      <Navigate
        to='/auth'
        replace
      />
    );
  }
  if (isAuth && location.pathname.startsWith('/auth')) {
    return (
      <Navigate
        to='/'
        replace
      />
    );
  }

  return <Outlet />;
};
export default Layout;
