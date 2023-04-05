import { AuthAction } from 'next-auth';

type ContactPayload = {
  name?: string;
  email: string;
  subject?: string;
  message: string;
};

type LoginData = {
  password?: string;
  email?: string;
  username?: string | null;
};

type UserInfo = {
  id: string;
  verified: boolean;
  username?: string;
  is_admin?: boolean;
  wallets?: TUserWallets[];
  wallet_address?: string;
  profile_image?: string;
  banner_image?: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
};

type MfaData = {
  image_url: string;
  auth_app_otp_secret: string;
};
