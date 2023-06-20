import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { route } from '@quacker/navigation/utility';
import { PageNotFound } from '@quacker/navigation/ui';
import { SignInPage, SignUpPage } from '@quacker/auth/feature';
import { HomePage, UserDetailPage } from '@quacker/quack/feature';

import { AboutPage } from './pages/AboutPage';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path={route.home()} element={<HomePage />} />
      <Route path={route.about()} element={<AboutPage />} />
      <Route path={route.signIn()} element={<SignInPage />} />
      <Route path={route.signUp()} element={<SignUpPage />} />
      <Route
        path={route.userDetail(':userName')}
        element={<UserDetailPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </RouterRoutes>
  );
}
