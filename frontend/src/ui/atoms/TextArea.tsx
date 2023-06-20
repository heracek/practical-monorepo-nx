import type { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={classNames(
        'db border-box w-100 measure-wide ba b--black-20 br2',
        className,
      )}
      {...rest}
    />
  );
}
