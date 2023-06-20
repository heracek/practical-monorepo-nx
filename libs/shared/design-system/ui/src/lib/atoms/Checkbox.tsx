import type { InputHTMLAttributes } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
  return <input type="checkbox" {...props} />;
}
