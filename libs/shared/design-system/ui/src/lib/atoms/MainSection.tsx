import type { ReactNode } from 'react';

export type MainSectionProps = {
  children: ReactNode;
};

export function MainSection({ children }: MainSectionProps) {
  return (
    <div className="pa3 bt b--black-10">
      <section className="mw6 center">{children}</section>
    </div>
  );
}
