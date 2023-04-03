import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';

import { TUserData } from '@/types/typings';

import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import { getUserData } from '@/services/user';
const cookies = new Cookies();

const tokenKey = 'accessToken';

interface ContextInterface {
  userInfo?: TUserData;
  userLoggedIn: boolean;
  error?: string;
  loading: boolean;
  logout: Function;
  getUserInfo: Function;
  setUserData: Function;
}

export const AuthContext = createContext<ContextInterface>({
  userInfo: undefined,
  userLoggedIn: false,
  error: undefined,
  loading: false,
  logout: () => {},
  getUserInfo: async () => {},
  setUserData: () => {},
});

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<TUserData>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    if (data && status === 'authenticated') {
      if (data.accessToken) {
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + 30 * 24 * 60 * 60 * 1000;
        now.setTime(expireTime);
        cookies.set(tokenKey, data.accessToken, { path: '/', expires: now });
        localStorage.setItem(tokenKey, data.accessToken);
      }
      if (!localStorage.getItem(tokenKey)) {
        logout();
        return;
      }

      getUserInfo();
    } else {
      localStorage.removeItem(tokenKey);
      cookies.remove(tokenKey);
      setLoading(false);
      setUserInfo(undefined);
      setUserLoggedIn(false);
    }
  }, [data, status]);

  const logout = () => {
    signOut({ callbackUrl: '/' });
    setUserInfo(undefined);
    setUserLoggedIn(false);
    localStorage.removeItem(tokenKey);
    cookies.remove(tokenKey);
  };

  const getUserInfo = async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      if (user) {
        setUserInfo(user);
        setUserLoggedIn(true);
      }
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  const setUserData = (user: TUserData) => {
    setUserInfo(user);
    setUserLoggedIn(true);
    setLoading(false);
  };

  const memoedValue = useMemo(
    () => ({
      userInfo,
      userLoggedIn,
      logout,
      getUserInfo,
      setUserData,
      error,
      loading,
    }),
    [userLoggedIn, userInfo, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const withAuth = (Component: NextPage<any>) => {
  const WithAuth: React.FC = (props: Record<string, any>) => {
    const router = useRouter();
    const { data: session } = useSession();
    const { loading } = useAuth();

    useEffect(() => {
      if (!session?.isLoggedIn && !loading) {
        localStorage.removeItem('accessToken');
        localStorage.setItem('returnURL', router.asPath);
        router.replace('/auth/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session?.isLoggedIn, loading]);

    if (session?.isLoggedIn) return <Component {...props} />;
    return null;
  };

  WithAuth.displayName = 'WithAuth';
  return WithAuth;
};
