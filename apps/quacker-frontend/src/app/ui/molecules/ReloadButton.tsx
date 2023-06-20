import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { TransparentButton } from '../atoms';
import type { TransparentButtonProps } from '../atoms';

export type ReloadButtonProps = {
  isLoading?: boolean;
} & TransparentButtonProps;

export function ReloadButton({
  isLoading,
  onClick,
  className,
}: ReloadButtonProps) {
  return (
    <TransparentButton className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faSyncAlt} spin={isLoading} className="mr2" />
      Reload
    </TransparentButton>
  );
}
