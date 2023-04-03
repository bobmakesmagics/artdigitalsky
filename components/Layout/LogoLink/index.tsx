import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';
import { LogoIcon } from '@/components/Common/Icons';
import Image from 'next/image';

export const LogoLink = () => {
  return (
    <Link href="/" legacyBehavior>
      <span className="cursor-pointer flex items-center font-semibold text-lg uppercase gap-2">
        <Image src={'/artdigitasky.ico'} alt="logo" width={30} height={30} />
        artdigitalsky
      </span>
    </Link>
  );
};
