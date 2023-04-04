import { useAuth } from '@/packages/auth/useAuth';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useRouter } from 'next/router';
import { TUserData } from '@/types/typings';
import styles from './UserMenu.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CategoryIcon from '@mui/icons-material/Category';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { AiFillGift } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  user?: TUserData;
};
const UserMenu = ({ user }: Props) => {
  const { asPath } = useRouter();

  const { logout } = useAuth();

  const addReturnURL = () => {
    localStorage.setItem('returnURL', asPath);
  };

  const handleLogout = () => {
    logout();
  };

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const showMoreMenuItems = [
    { text: 'Privacy', href: '/policies/privacy' },
    { text: 'Terms', href: '/policies/terms' },
    { text: 'White Paper', href: 'https://whitepaper.dcentral.me/' },
  ];

  if (user) {
    return (
      <div className={`${styles.dropdownMenu} mt-[3px] -mr-[16px]`}>
        <Link href={`/profile/${user.username}?tab=items`}>
          <span className={styles.item}>
            NFTs
            <CategoryIcon className={styles.icon} />
          </span>
        </Link>
        <Link href={`/profile/${user.username}?tab=likes`}>
          <span className={styles.item}>
            Favorites
            <FavoriteBorderIcon className={styles.icon} />
          </span>
        </Link>
        <Link href="/rewards">
          <span className={`${styles.item} `}>
            Rewards
            <AiFillGift className={`${styles.icon}`} />
          </span>
        </Link>
        <Link href="/settings/account">
          <span className={styles.item}>
            Settings
            <SettingsOutlinedIcon className={styles.icon} />
          </span>
        </Link>
        <Link href="">
          <span className={styles.item} onClick={handleLogout}>
            Log Out
            <PowerSettingsNewOutlinedIcon className={styles.icon} />
          </span>
        </Link>
        <div className="mx-auto mt-3 mb-1 w-[90%] border-[0.5px] border-light-gray/10"></div>
        <div
          className={`${styles.item} ${showMoreMenu && 'text-dark-pri'}`}
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          More
          <motion.div
            animate={{
              scaleY: showMoreMenu ? -1 : 1,
            }}
          >
            <ExpandMoreOutlinedIcon className={styles.icon} />
          </motion.div>
        </div>
        {showMoreMenu && (
          <>
            {showMoreMenuItems.map((menuItem, index) => (
              <Link
                href={menuItem.href}
                target="_blank"
                className={`ml-2`}
                key={index}
              >
                <span className={styles.item}>
                  {menuItem.text}
                  {menuItem.text === 'White Paper' ? (
                    <ArticleOutlinedIcon className={styles.icon} />
                  ) : (
                    <LaunchOutlinedIcon className={styles.icon} />
                  )}
                </span>
              </Link>
            ))}
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className={`${styles.dropdownMenu} -mt-[18px]`}>
        <>
          <Link href="/auth/login" onClick={addReturnURL}>
            <span className={styles.item}>
              Log In
              <PowerSettingsNewOutlinedIcon className={styles.icon} />
            </span>
          </Link>

          <Link href="/auth/register" onClick={addReturnURL}>
            <span className={styles.item}>
              Sign Up
              <AccountCircleOutlinedIcon className={styles.icon} />
            </span>
          </Link>
          <Link href="/contact">
            <span className={styles.item}>
              Contact
              <EmailOutlinedIcon className={styles.icon} />
            </span>
          </Link>
          <div className="mx-auto mt-3 mb-1 w-[90%] border-[0.5px] border-light-gray/10"></div>
          <div
            className={`${styles.item} ${showMoreMenu && 'text-dark-pri'}`}
            onClick={() => setShowMoreMenu(!showMoreMenu)}
          >
            More
            <motion.div
              animate={{
                scaleY: showMoreMenu ? -1 : 1,
              }}
            >
              <ExpandMoreOutlinedIcon className={styles.icon} />
            </motion.div>
          </div>

          {showMoreMenu && (
            <>
              {showMoreMenuItems.map((menuItem, index) => (
                <a
                  href={menuItem.href}
                  target="_blank"
                  className={`ml-2`}
                  key={index}
                >
                  <span className={styles.item}>
                    {menuItem.text}
                    {menuItem.text === 'White Paper' ? (
                      <ArticleOutlinedIcon className={styles.icon} />
                    ) : (
                      <LaunchOutlinedIcon className={styles.icon} />
                    )}
                  </span>
                </a>
              ))}
            </>
          )}
        </>
      </div>
    );
  }
};

export default UserMenu;
