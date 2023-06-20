import classNames from 'classnames';
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom';

export type LinkProps = {
  noUnderline?: boolean;
} & RouterLinkProps;

export function Link({ children, className, noUnderline, ...rest }: LinkProps) {
  return (
    <RouterLink
      className={classNames(
        'link no-underline',
        { 'underline-hover': !noUnderline },
        className,
      )}
      {...rest}
    >
      {children}
    </RouterLink>
  );
}
