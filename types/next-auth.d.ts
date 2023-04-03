import NextAuth, { DefaultSession, Profile, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { TUserData, TUserWallets } from 'types/typings';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: TUserData & DefaultSession['user'];
    expires: string;
    accessToken: string;
    isLoggedIn: boolean;
  }

  interface Profile {
    login?: string;
    node_id?: string;
    bio?: string;
    location?: string;
    display_name?: string;
    discriminator?: string;
    verified?: boolean;
    email_verified?: boolean;
    avatar?: string;
  }

  interface JWT {
    accessToken: string;
  }

  interface User {
    username?: string;
    accessToken?: string;
    profile_image?: string;
    wallets?: TUserWallets[];
  }
}
