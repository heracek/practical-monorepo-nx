import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export type InlineTextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function InlineTextInput({ className, ...props }: InlineTextInputProps) {
  return (
    <input
      className={classNames(
        'flex-auto mr1 bn bg-transparent br1 pa1',
        className,
      )}
      {...props}
    />
  );
}
