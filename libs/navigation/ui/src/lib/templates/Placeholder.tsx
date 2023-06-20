import type { ReactNode } from 'react';
import { Heading, MainSection } from '@quacker/ui';
import { TopNavigation } from '../organisms';

export type PlaceholderProps = {
  title: string;
  children: ReactNode;
};

export function Placeholder({ title, children }: PlaceholderProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading>{title}</Heading>

        {typeof children === 'undefined' ? (
          <p>This page is empty for now...</p>
        ) : (
          children
        )}
      </MainSection>
    </>
  );
}
