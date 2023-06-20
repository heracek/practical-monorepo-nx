import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { SignUpTemplate } from '@quacker/auth/ui';
import { useAuth } from '@quacker/auth/context-ui';
import { route } from '@quacker/navigation/utility';

const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $name: String!
    $password: String!
    $userName: String!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      userName: $userName
    ) {
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

export type SignUpPageProps = Record<string, never>;

export function SignUpPage(props: SignUpPageProps) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [signupRequest, signupRequestState] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup: { user, token } }) => {
      auth.signin({ token, user });
      navigate(route.home());
    },
    onError: () => {},
  });

  const handleSignUpFormSubmit = useCallback(
    (variables: any) => {
      signupRequest({ variables });
    },
    [signupRequest],
  );

  return (
    <SignUpTemplate
      isLoading={signupRequestState.loading}
      error={signupRequestState.error}
      onSubmit={handleSignUpFormSubmit}
    />
  );
}
