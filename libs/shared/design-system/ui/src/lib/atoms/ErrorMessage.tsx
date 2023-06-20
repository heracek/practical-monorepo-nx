import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

export type ErrorMessageProps = HTMLAttributes<HTMLDivElement>;

export function ErrorMessage({ className, ...props }: ErrorMessageProps) {
  return <div className={classNames('dark-red f5', className)} {...props} />;
}
