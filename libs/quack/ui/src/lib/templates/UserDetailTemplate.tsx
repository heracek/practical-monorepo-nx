import { gql } from '@apollo/client';

import {
  AvatarPhoto,
  Button,
  ErrorBanner,
  Heading,
  Loading,
  MainSection,
  ReloadButton,
} from '@quacker/ui';
import { TopNavigation } from '@quacker/navigation/ui';

import { QuackForm } from '../molecules/';
import type { QuackFormProps } from '../molecules/';
import { QuackList } from '../organisms/';
import type { QuackListProps } from '../organisms/';

export type UserDetailTemplateProps = {
  userName: string;
  user: {
    profileImageUrl: string;
    name: string;
    userName: string;
    quacks: QuackListProps['quacks'];
  };
  loading?: boolean;
  error?: Error | null;
  onReload: () => void;
  quackFormState: QuackFormProps;
  currentUser: {
    userName: string;
  } | null;
};

export function UserDetailTemplate({
  userName,
  user,
  loading,
  error,
  onReload,
  quackFormState,
  currentUser,
}: UserDetailTemplateProps) {
  const showQuackForm =
    quackFormState && currentUser && currentUser.userName === userName;

  return (
    <>
      <TopNavigation />
      <MainSection>
        {loading && !user && <Loading />}

        {error && (
          <ErrorBanner title={error.message}>
            <Button color="red" onClick={onReload}>
              Reload
            </Button>
          </ErrorBanner>
        )}

        {user && (
          <>
            <header>
              <AvatarPhoto
                src={user.profileImageUrl}
                alt={user.name}
                size="4"
                className="mb2"
              />
              <Heading size="lg">{user.name}</Heading>
              <Heading size="sm" className="fw4 gray">
                @{user.userName}
              </Heading>
            </header>

            {showQuackForm && <QuackForm {...quackFormState} />}

            <ReloadButton
              onClick={onReload}
              isLoading={loading}
              className="fr"
            />

            <QuackList quacks={user.quacks} refetch={onReload} />
          </>
        )}
      </MainSection>
    </>
  );
}
UserDetailTemplate.fragments = {
  user: gql`
    fragment UserDetailTemplate_user on User {
      id
      name
      userName
      profileImageUrl
      quacks {
        ...QuackList_quacks
      }
    }

    ${QuackList.fragments.quacks}
  `,
};
