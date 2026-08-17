import { SignUpPage } from '@/pages';
import { SignInPage } from '@/pages/signIn';
import { Loader } from '@/shared/ui';
import { createBrowserRouter } from 'react-router';
const router = createBrowserRouter([
  {
    path: '/',
    loader: Loader,
    children: [
      {
        path: 'auth',
        children: [
          { path: 'login', Component: SignInPage },
          { path: 'register', Component: SignUpPage },
        ],
      },
    ],
  },
]);
export default router;
