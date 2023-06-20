import { ErrorMessage, Label, TextInput } from '../atoms';
import type { TextInputProps } from '../atoms';

type FieldPropsBase = {
  id?: string;
  label: string;
  error?: string | null | boolean;
};

export type FieldProps = FieldPropsBase &
  Omit<TextInputProps, keyof FieldPropsBase>;

export function Field({ id, label, error, ...props }: FieldProps) {
  return (
    <div className="measure mb2">
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} className="mb1" error={!!error} {...props} />
      {error && <ErrorMessage className="mb1 f6">{error}</ErrorMessage>}
    </div>
  );
}
