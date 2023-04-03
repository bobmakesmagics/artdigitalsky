import Client from './client';
import { getCachedToken } from '@/utils/auth';
import { SocialAccount, TUserData, Wallet } from 'types/typings';

export type CreateUserProps = {
  username: string;
  email: string;
  password: string;
};

export type LoginUserProps = {
  username?: string;
  email?: string;
  password: string;
};

export type LoginUserWithMfaProps = {
  code: string;
  ticket: string;
};

export const createUser = async (params: CreateUserProps) => {
  try {
    const user: TUserData = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        body: params,
      }
    );

    return user;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const addSocialAccount = async (params: SocialAccount) => {
  try {
    const account: TUserData = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/addSocialAccount`,
      {
        body: params,
      }
    );

    return account;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const getUserData = async () => {
  const token = await getCachedToken();
  if (!token) {
    return null;
  }

  try {
    const userData = await Client.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return userData;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const getUserInfoById = async (userId: string) => {
  try {
    const userData = await Client.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/userInfo/${userId}`
    );

    if (userData) return userData;

    return false;
  } catch (e: any) {
    console.error('error', e);
    return false;
    // throw new Error(e?.message || e);
  }
};

export const getUserNameByWallet = async (wallet_address: string) => {
  try {
    const user = await Client.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/getUsernameByWallet/${wallet_address}`
    );

    if (user) return user?.username;

    return false;
  } catch (e: any) {
    console.error('error', e);
    return false;
    // throw new Error(e?.message || e);
  }
};

export const loginUser = async (params: LoginUserProps) => {
  if (!params?.email && !params?.username) {
    console.error('Invalid params. email or username is required');
    return null;
  }
  try {
    const user: TUserData = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth`,
      {
        body: params,
      }
    );

    return user;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || 'Failed to log user in');
  }
};

export const loginUserWithMfa = async (params: LoginUserWithMfaProps) => {
  if (!params?.code || !params?.ticket) {
    console.error('Invalid params. code and ticket is required');
    return null;
  }
  try {
    const user: TUserData = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/mfa/auth-app/totp`,
      {
        body: params,
      }
    );

    return user;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const verifyEmail = async (token: string) => {
  try {
    const user: TUserData = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/email/verify`,
      {
        body: { token },
      }
    );

    return user;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const customer = await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/email/verify/resend`,
      {
        body: { email },
      }
    );

    return customer;
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const resetPassword = async (email: string) => {
  try {
    return await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/password/reset`,
      {
        body: { email },
      }
    );
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e?.message || e);
  }
};

export const confirmResetPassword = async (password: string, token: string) => {
  try {
    return await Client.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/password/reset/verify`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { password, token },
      }
    );
  } catch (e: any) {
    console.error('error', e);
  }
};

export async function getWalletByAddress(address: string) {
  try {
    const wallet = await Client.get(
      `${process.env.NEXT_PUBLIC_API_URL}/wallets/getByAddress/${address}`
    );

    if (wallet) {
      return wallet;
    }

    return false;
  } catch (e: any) {
    console.log(e);
    return false;
  }
}

export async function registerWallet(wallet: Wallet) {
  const token = await getCachedToken();
  if (!token) {
    throw new Error('No access token');
  }

  try {
    return await Client.post(`${process.env.NEXT_PUBLIC_API_URL}/wallets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: wallet,
    });
  } catch (e: any) {
    throw new Error(e.message || e);
  }
}

export async function removeWallet(id: string) {
  const token = await getCachedToken();
  if (!token) {
    return null;
  }

  try {
    return await Client.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/wallets/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.error('error', e);
    return null;
  }
}

export const getUserProfile = async (username: string) => {
  try {
    const res = await Client.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/profile/${username}`
    );
    return res;
  } catch (e: any) {
    console.error('Error', e);
    return {};
  }
};
