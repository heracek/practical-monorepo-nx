import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export type LoadingProps = Record<string, never>;

export function Loading(props: LoadingProps) {
  return (
    <div className="center black-60">
      <div className="tc f4 pa4">
        <FontAwesomeIcon icon={faFeatherAlt} spin />
        <div className="dib ml3">Loading...</div>
      </div>
    </div>
  );
}
