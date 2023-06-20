import { useField } from 'formik';

import { Field } from './Field';
import type { FieldProps } from './Field';

export type FormikFieldProps = {
  name: string;
} & Omit<FieldProps, 'name'>;

export function FormikField({ name, ...props }: FormikFieldProps) {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error;

  return <Field {...field} error={error} {...props} />;
}
