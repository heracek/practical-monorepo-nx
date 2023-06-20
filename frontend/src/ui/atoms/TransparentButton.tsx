import type { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type TransparentButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function TransparentButton({
  children,
  className,
  ...rest
}: TransparentButtonProps) {
  return (
    <button
      className={classNames(
        'f6 black-60 button-reset bn dim pointer pa2',
        className,
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
