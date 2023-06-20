import { gql } from '@apollo/client';

import { Button, ErrorBanner, Loading } from '@quacker/ui';
import { Quack } from '../molecules/';
import type { QuackProps } from '../molecules/';

export type QuackListProps = {
  quacks: Array<{ id: number } & QuackProps['quack']>;
  isLoading?: boolean;
  error?: Error | null;
  refetch: () => void;
};

export function QuackList({
  quacks,
  isLoading,
  error,
  refetch,
}: QuackListProps) {
  return (
    <>
      {isLoading && !quacks && <Loading />}
      {error && (
        <ErrorBanner title={error.message}>
          <Button color="red" onClick={() => refetch()}>
            Reload
          </Button>
        </ErrorBanner>
      )}
      {quacks && quacks.map((quack) => <Quack key={quack.id} quack={quack} />)}
    </>
  );
}
QuackList.fragments = {
  quacks: gql`
    fragment QuackList_quacks on Quack {
      id
      ...Quack_quack
    }

    ${Quack.fragments.quack}
  `,
};
