import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';

const LOCAL_STORAGE_AUTH_KEY = 'quacker-auth';

export type AuthUser = {
  id: number;
  userName: string;
  name: string;
  profileImageUrl: string;
};

export type PersistedState = {
  token: string | null;
  user: AuthUser | null;
};

const initialState: PersistedState = {
  token: null,
  user: null,
};

const AuthContext = createContext(
  createContextValue({
    token: initialState.token,
    user: initialState.user,
    setState: () =>
      console.error('You are using AuthContext without AuthProvider!'),
  }),
);

export function useAuth() {
  return useContext(AuthContext);
}

export type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = usePersistedAuth(initialState);

  const contextValue = useMemo(() => {
    const { token, user } = state;
    return createContextValue({ token, user, setState });
  }, [state, setState]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

type AuthProviderState = { token: string | null; user: AuthUser | null };

function createContextValue({
  token,
  user,
  setState,
}: {
  token: string | null;
  user: AuthUser | null;
  setState: (value: AuthProviderState) => void;
}) {
  return {
    token,
    user,
    signin: ({ token, user }: { token: string; user: AuthUser }) =>
      setState({ token, user }),
    signout: () => setState({ token: null, user: null }),
  };
}

function usePersistedAuth(defaultState: PersistedState) {
  const [state, setStateRaw] = useState<AuthProviderState>(() =>
    getStorageState(defaultState),
  );

  const setState = useCallback((newState: AuthProviderState) => {
    setStateRaw(newState);
    setStorageState(newState);
  }, []);

  return [state, setState] as const;
}

function getStorageState(defaultState: PersistedState): PersistedState {
  if (!window.localStorage) {
    return defaultState;
  }

  const rawData = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
  if (!rawData) {
    return defaultState;
  }

  try {
    const { user, token } = JSON.parse(rawData);

    if (token && user && user.userName && user.id && user.name) {
      return { token, user };
    }
  } catch {
    // ignore
  }

  return defaultState;
}

function setStorageState(newState: PersistedState) {
  if (!window.localStorage) {
    return;
  }

  window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newState));
}
