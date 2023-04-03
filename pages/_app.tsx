import Head from 'next/head';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/packages/auth/useAuth';
// import NextNProgress from 'nextjs-progressbar';
import { Theme, ToastContainer } from 'react-toastify';
import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [pageTheme, setPageTheme] = useState<Theme>('light');

  useEffect(() => {
    setPageTheme((localStorage.getItem('theme') as Theme) ?? 'light');
  }, []);
  return (
    <>
      <Head>
        <title>{'Art Digital Sky'}</title>
        <link rel="icon" href="/artdigitasky.ico" />
      </Head>
      {/* <SessionProvider session={session}> */}
      {/* <AuthProvider> */}
      <ThemeProvider attribute="class">
        {/* <NextNProgress
            color="#7654ff"
            height={2}
            options={{ showSpinner: false }}
          /> */}
        <Component {...pageProps} />
        <ToastContainer
          limit={3}
          autoClose={3000}
          position="top-right"
          closeOnClick
          theme={pageTheme}
        />
      </ThemeProvider>
      {/* </AuthProvider> */}
      {/* </SessionProvider> */}
    </>
  );
}

export default MyApp;
