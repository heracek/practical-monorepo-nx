import type { LabelHTMLAttributes } from 'react';
import classNames from 'classnames';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return <label className={classNames('f5 b db mb1', className)} {...props} />;
}
