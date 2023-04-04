import { IconMoon, IconSun } from '@/components/Common/Icons';
import { LogoLink } from '@/components/Layout/LogoLink';
import { useTheme } from 'next-themes';
import React, { useCallback, useEffect, useState } from 'react';
import MainMenu from './MainMenu';

type Props = {
  setBlurActive: (active: boolean) => void;
  blurClicked: boolean;
  headerFixed?: boolean;
};

const Header = ({ setBlurActive, blurClicked, headerFixed }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onShowMobileMenu = useCallback(() => {
    setBlurActive(!showMobileMenu);
    setShowMobileMenu(!showMobileMenu);
  }, [setBlurActive, showMobileMenu]);

  useEffect(() => {
    if (blurClicked) onShowMobileMenu();
  }, [blurClicked, onShowMobileMenu]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 py-4 px-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container flex justify-between items-center m-auto">
        {/* LOGO */}
        <LogoLink />
        <div className="flex gap-8">
          <MainMenu />
          <div className="flex items-center font-medium text-xs gap-6 justify-end ml-auto text-gray-c1 dark:text-light-gray">
            {/* DARK MODE */}
            <div className="flex items-center">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? (
                  <IconMoon className="h-5" />
                ) : (
                  <IconSun className="h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <div>
          <button
            aria-label="toggle mobile menu"
            onClick={onShowMobileMenu}
            className=" dark:text-light-gray"
          >
            <IconMenu />
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
