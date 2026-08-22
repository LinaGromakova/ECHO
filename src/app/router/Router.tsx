import { AuthPage, HomePage, SignUpPage } from '@/pages';
import { SignInPage } from '@/pages/signIn';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'auth',
        Component: AuthPage,
        children: [
          { path: 'login', Component: SignInPage },
          { path: 'register', Component: SignUpPage },
        ],
      },
    ],
  },
]);
export default router;
