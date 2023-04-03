import {
  IconMenu,
  IconMoon,
  IconProfile,
  IconSms,
  IconSun,
  IconWallet,
} from '@/components/Common/Icons';
import Notification from '@/components/Common/Notification';
import { LogoLink } from '@/components/Layout/LogoLink';
import SearchInput from '@/components/Layout/SearchInput/SearchInput';
import { Dropdown } from '@/components/Widgets/Dropdown';
import { useAuth } from '@/packages/auth/useAuth';
import { getStaticAssetPath } from '@/utils/misc';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './Header.module.scss';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';

type Props = {
  setBlurActive: (active: boolean) => void;
  blurClicked: boolean;
  headerFixed?: boolean;
};

const Header = ({ setBlurActive, blurClicked, headerFixed }: Props) => {
  const [search, setSearch] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { userInfo: user } = useAuth();
  const { push } = useRouter();

  const [showItemDropdown, setShowItemDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuSlide = useSpring({
    left: !showMobileMenu ? '-100%' : '0',
  });

  const onShowMobileMenu = () => {
    setBlurActive(!showMobileMenu);
    setShowMobileMenu(!showMobileMenu);
  };

  const onHeaderBlurClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onShowMobileMenu();
  };

  useEffect(() => {
    if (blurClicked) onShowMobileMenu();
  }, [blurClicked]);

  const [walletDropdown, setWalletDropdown] = useState(false);

  // Notification state: Wallet address copied
  const [addrCopied, setAddrCopied] = useState(false);

  const handleCopyWalletAddr = (address: string) => {
    navigator.clipboard.writeText(address);
    setAddrCopied(true);
  };

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
