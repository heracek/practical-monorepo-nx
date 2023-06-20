import { Link } from 'src/ui';
import { route } from 'src/Routes';

import { Placeholder } from './Placeholder';

export type PageNotFoundProps = Record<string, never>;

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <Placeholder title="Error 404">
      <p>
        Page not found, please return to <Link to={route.home()}>Home</Link>.
      </p>
    </Placeholder>
  );
}
