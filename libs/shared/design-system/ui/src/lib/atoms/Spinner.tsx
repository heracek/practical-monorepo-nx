import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export type SpinnerProps = Omit<FontAwesomeIconProps, 'icon'>;

export function Spinner(props: SpinnerProps) {
  return <FontAwesomeIcon icon={faFeatherAlt} spin {...props} />;
}
