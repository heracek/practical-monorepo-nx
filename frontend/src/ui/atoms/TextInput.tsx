import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

export type TextInputProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ className, error, ...props }: TextInputProps) {
  return (
    <input
      type="text"
      className={classNames(
        'border-box input-reset ba pa2 db w-100',
        error ? 'b--red' : 'b--black-20',
        className,
      )}
      {...props}
    />
  );
}
