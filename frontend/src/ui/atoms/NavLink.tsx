import classNames from 'classnames';
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

export type NavLinkProps = Omit<RouterNavLinkProps, 'className'> & {
  className?: string;
};

export function NavLink({ className, ...rest }: NavLinkProps) {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        classNames(className, 'link no-underline f6 dib white dim', {
          'bg-black-30': isActive,
        })
      }
      {...rest}
    />
  );
}
