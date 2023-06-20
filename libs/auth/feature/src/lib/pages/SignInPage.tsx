import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { SignInTemplate } from '@quacker/auth/ui';
import { useAuth } from '@quacker/auth/context-ui';
import { route } from '@quacker/navigation/utility';

const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        id
        name
        userName
        profileImageUrl
      }
      token
    }
  }
`;

export type SignInPageProps = Record<string, never>;

export function SignInPage(props: SignInPageProps) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [signinRequest, signinRequestState] = useMutation(SIGNIN_MUTATION, {
    onCompleted: ({ signin: { user, token } }) => {
      auth.signin({ token, user });
      navigate(route.home(), { replace: true });
    },
    onError: () => {},
  });

  const handleSignInFormSubmit = useCallback(
    (variables: any) => {
      signinRequest({ variables });
    },
    [signinRequest],
  );

  return (
    <SignInTemplate
      isLoading={signinRequestState.loading}
      error={signinRequestState.error}
      onSubmit={handleSignInFormSubmit}
    />
  );
}
