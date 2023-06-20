import classNames from 'classnames';
import type { ButtonHTMLAttributes } from 'react';

const COLORS = {
  red: 'bg-red',
  green: 'bg-green',
  default: 'bg-blue',
} as const;

export type SmallButtonProps = {
  colorScheme: keyof typeof COLORS;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SmallButton({
  colorScheme = 'default',
  className,
  disabled,
  ...props
}: SmallButtonProps) {
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={classNames(
        'f6 br2 bn pa1 dib white',
        { 'o-50': disabled, dim: !disabled },
        COLORS[colorScheme] ?? COLORS.default,
        className,
      )}
    />
  );
}
