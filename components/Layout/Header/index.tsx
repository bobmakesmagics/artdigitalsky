import { LogoLink } from '@/components/Layout/LogoLink';
import React, { useState } from 'react';
import MainMenu from './MainMenu';
import { ThemeSwich } from './ThemeSwich';
import { MenuCollapse } from './MemuCollapse';

type Props = {
  headerFixed?: boolean;
};

const Header = ({ headerFixed }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 px-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <LogoLink />
        <MenuCollapse isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <MainMenu />
          <ThemeSwich />
        </div>
      </nav>
    </header>
  );
};

export default Header;
