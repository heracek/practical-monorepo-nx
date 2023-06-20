import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { PageNotFound } from 'src/navigation/ui';
import { SignInPage, SignUpPage } from 'src/auth/feature';
import { AboutPage } from 'src/content/feature';
import { HomePage, UserDetailPage } from 'src/quack/feature';

export const route = {
  home: () => `/`,
  about: () => `/about`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (userName: string) => `/${userName}`,
};

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
