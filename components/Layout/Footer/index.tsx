import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-0">
      <div className="text-center p-6 text-base dark:border-[#2C2A52]/70 dark:text-light-gray md:flex md:justify-between">
        <span>© 2022 - 2023 ArtDigitalSky Inc. All rights reserved.</span>
        <ul className="flex flex-col md:flex-row items-center justify-center md:gap-8 pt-6 md:pt-0">
          <li className="hover:text-blue-700 dark:hover:text-slate-600">
            <Link href="/policies/privacy" target="_blank">
              <span>Privacy Policy</span>
            </Link>
          </li>
          <li className="hover:text-blue-700 dark:hover:text-slate-600">
            <Link href="/policies/terms" target="_blank">
              <span>Terms of Use</span>
            </Link>
          </li>
          <li className="hover:text-blue-700 dark:hover:text-slate-600">
            <Link href="/sitemap" target="_blank">
              <span>Sitemap</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
