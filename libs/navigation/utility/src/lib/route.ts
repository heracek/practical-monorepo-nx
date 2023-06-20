export const route = {
  home: () => `/`,
  about: () => `/about`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (userName: string) => `/${userName}`,
};
