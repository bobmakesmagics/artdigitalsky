import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LogoLink = () => {
  return (
    <Link href="/" legacyBehavior>
      <span className="cursor-pointer flex items-center font-semibold text-xl md:text-2xl uppercase gap-2 flex-shrink-0 mr-6 lg:mr-72">
        <Image src={'/artdigitasky.ico'} alt="logo" width={36} height={36} />
        artdigitalsky
      </span>
    </Link>
  );
};
