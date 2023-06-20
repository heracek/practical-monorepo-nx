import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

const COLORS = {
  green: 'white bg-green hover-bg-dark-green',
  navbar: 'f6 white bg-transparent hover-bg-white hover-black mh3 b--white-20',
  red: 'white bg-red hover-bg-dark-red',
} as const;

const DEFAULT_COLOR: keyof typeof COLORS = 'green';

type ButtonPropsBase<TAsComponent extends ElementType> = {
  children: ReactNode;
  color?: keyof typeof COLORS;
  className?: string;
  as?: TAsComponent;
  border?: boolean;
  narrow?: boolean;
};

export type ButtonProps<TAsComponent extends ElementType> =
  ButtonPropsBase<TAsComponent> &
    Omit<
      ComponentPropsWithoutRef<TAsComponent>,
      keyof ButtonPropsBase<TAsComponent>
    >;

export function Button<TAsComponent extends ElementType = 'button'>({
  children,
  color,
  className,
  as,
  border = false,
  narrow = false,
  disabled,
  ...rest
}: ButtonProps<TAsComponent>) {
  const colorClasses = COLORS[color ?? DEFAULT_COLOR] ?? COLORS[DEFAULT_COLOR];
  const Component = as ?? 'button';

  return (
    <Component
      className={classNames(
        'dib bg-animate pv2 br-pill',
        narrow ? 'ph3' : 'ph4',
        border ? 'ba' : 'bn',
        { 'o-50': disabled },
        colorClasses,
        className,
      )}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
