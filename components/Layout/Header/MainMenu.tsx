import Link from 'next/link';
import React, { useState } from 'react';
import { linksArray } from '@/utils/data';

type Props = {
  className?: string;
};

type Link = {
  id: string;
  link: string;
  text: string;
  gradient?: boolean;
  onlyMobile?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  dataTooltip?: string | string[];
};

const MainMenu = ({ className }: Props) => {
  const [links, setLinks] = useState<Link[]>(linksArray);

  return (
    <div className="text-sm lg:flex-grow">
      {links.map((menu) => (
        <a
          key={menu.id}
          href={menu.link}
          className="block mt-4 text-lg lg:inline-block lg:mt-0 mr-4"
        >
          {menu.text}
        </a>
      ))}
    </div>
  );
};

export default MainMenu;
