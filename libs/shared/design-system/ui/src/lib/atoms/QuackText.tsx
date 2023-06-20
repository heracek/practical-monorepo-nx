import type { ReactNode } from 'react';

export type QuackTextProps = {
  children: ReactNode;
};

export function QuackText({ children }: QuackTextProps) {
  return <div className="pt2 black-90 pre-line break-word">{children}</div>;
}
