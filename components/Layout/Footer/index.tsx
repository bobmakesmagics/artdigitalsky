import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <footer className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-0">
      <div className="container items-center m-auto">
        <div className="text-center py-6 text-base text-gray-c1 dark:border-[#2C2A52]/70 dark:text-light-gray md:flex md:justify-between">
          <span>© 2022 - 2023 ArtDigitalSky Inc. All rights reserved.</span>
          <ul className="flex items-center justify-center gap-8 pt-6 md:pt-0">
            <li className="hover:text-primary dark:hover:text-dark-pri">
              <Link href="/policies/privacy" target="_blank">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li className="hover:text-primary dark:hover:text-dark-pri">
              <Link href="/policies/terms" target="_blank">
                <span>Terms of Use</span>
              </Link>
            </li>
            <li className="hover:text-primary dark:hover:text-dark-pri">
              <Link href="/sitemap" target="_blank">
                <span>Sitemap</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
