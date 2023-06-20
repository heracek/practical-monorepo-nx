import { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

import { HomeTemplate } from '@quacker/quack/ui';
import { useAuth } from '@quacker/auth/context-ui';

const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      ...HomeTemplate_quacks
    }
  }

  ${HomeTemplate.fragments.quacks}
`;

const QUACK_MUTATION = gql`
  mutation Quack($userId: Int!, $text: String!) {
    addQuack(userId: $userId, text: $text) {
      id
    }
  }
`;

export type HomePageProps = Record<string, never>;

export function HomePage(props: HomePageProps) {
  const { user } = useAuth();

  const quacksState = useQuery(QUACKS_QUERY);
  const [quackFormText, setQuackFormText] = useState('');

  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    QUACK_MUTATION,
    {
      onCompleted: () => {
        setQuackFormText('');
        quacksState.refetch();
      },
      onError: () => {},
    },
  );

  const submitQuack = ({ text }: { text: string }) => {
    quackMutationRequest({ variables: { text, userId: user?.id } });
  };

  const quackFormState = {
    error: quackMutationRequestState.error,
    loading: quackMutationRequestState.loading,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: submitQuack,
  };

  return (
    <HomeTemplate
      quacks={quacksState.data?.quacks}
      error={quacksState.error}
      loading={quacksState.loading}
      refetchQuacks={() => quacksState.refetch()}
      quackFormState={quackFormState}
      currentUser={user}
    />
  );
}
