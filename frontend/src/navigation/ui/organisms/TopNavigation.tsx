import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { AvatarPhoto, Link, NavLink, Button } from 'src/ui';
import { useAuth } from 'src/auth/context-ui';
import { route } from 'src/Routes';

export type TopNavigationProps = Record<string, never>;

export function TopNavigation(props: TopNavigationProps) {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between bb b--white-10 bg-dark-green white">
      <Link
        to={route.home()}
        noUnderline
        className="b white flex items-center pv2 ph3"
      >
        <FontAwesomeIcon icon={faFeatherAlt} className="mr2 f4" />
        Quacker
      </Link>
      <div className="flex-grow flex items-center">
        <NavLink end to={route.home()} className="pa3">
          Home
        </NavLink>
        <NavLink to={route.about()} className="pa3">
          About
        </NavLink>
        {user ? (
          <>
            <NavLink
              to={route.userDetail(user.userName)}
              className="ph3 pv1 h-100 flex items-center"
            >
              <AvatarPhoto
                className="v-mid dib mr2"
                src={user.profileImageUrl}
                alt={user.userName}
                size="2"
              />{' '}
              {user.name}
            </NavLink>
            <Button
              color="navbar"
              border
              narrow
              onClick={() => {
                signout();
                navigate(route.home());
                window.location.reload();
              }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <NavLink to={route.signIn()} className="pa3">
              Sign In
            </NavLink>
            <Button
              to={route.signUp()}
              as={Link}
              color="navbar"
              narrow
              border
              noUnderline
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
