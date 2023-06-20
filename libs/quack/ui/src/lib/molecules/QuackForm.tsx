import classNames from 'classnames';

import { ErrorMessage, TextArea, LoadingButton } from '@quacker/ui';

export type QuackFormProps = {
  error?: Error | null;
  loading?: boolean;
  text: string;
  setText: (value: string) => void;
  onSubmit: (value: { text: string }) => void;
  maxLength?: number;
  className?: string;
};

export function QuackForm({
  error,
  loading,
  text,
  setText,
  onSubmit,
  maxLength = 250,
  className,
}: QuackFormProps) {
  const length = !text ? 0 : text.length;
  const isLengthValid = length <= maxLength;

  return (
    <form
      className={classNames('pv2 black-90 bb b--black-10 cf', className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit({ text });
      }}
    >
      <div>
        <TextArea
          value={text}
          onChange={(e) => {
            setText && setText(e.target.value);
          }}
          name="comment"
          className="pa2 h3 mb2"
          placeholder="Quack somethig..."
          disabled={loading}
        />
      </div>
      {error && <ErrorMessage>{`${error}`}</ErrorMessage>}
      <div className="fr">
        <span
          className={classNames('f6 mr3', {
            'dark-red': !isLengthValid,
            'black-60': isLengthValid,
          })}
        >
          {length}/{maxLength}
        </span>
        <LoadingButton className="f5" type="submit" loading={loading}>
          Quack
        </LoadingButton>
      </div>
    </form>
  );
}
