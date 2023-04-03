import { IconHome, IconMail, IconShop } from '@/components/Common/Icons';
import { Dropdown } from '@/components/Widgets/Dropdown';
// import { useAuth } from '@/packages/auth/useAuth';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CreateIcon from '@mui/icons-material/Create';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './MainMenu.module.scss';

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

const linksArray: Link[] = [
  {
    id: 'home',
    link: '/',
    text: 'Home',
    icon: IconHome,
    dataTooltip: 'Seasons greetings!',
  },
  {
    id: 'services',
    link: '/services',
    text: 'Services',
    icon: IconShop,
  },
  {
    id: 'contact',
    link: '/contactus',
    text: 'Contact Us',
    icon: IconMail,
  },
];

const MainMenu = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  const [links, setLinks] = useState<Link[]>(linksArray);

  return (
    <div className={`${className} flex gap-4`}>
      {links.map((link) => (
        <React.Fragment key={link.id}>
          <span
            key={link.id}
            className={``}
            onClick={
              link.link ? () => router.push(link.link as string) : link.onClick
            }
          >
            {/* <link.icon /> */}
            {link.link ? (
              <Link href={link.link as string} legacyBehavior>
                {link.text}
              </Link>
            ) : (
              <>{link.text}</>
            )}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainMenu;
