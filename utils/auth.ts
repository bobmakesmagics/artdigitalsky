import { TOKEN_KEY } from '@/services/config';

export const getCachedToken = () => localStorage.getItem(TOKEN_KEY);
