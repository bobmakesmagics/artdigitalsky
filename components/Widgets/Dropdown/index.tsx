import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import styles from './Dropdown.module.scss';

type Props = {
  Target: () => JSX.Element;
  Content?: () => JSX.Element;
  toggle: boolean;
  setToggle: (key: boolean) => void;
  className?: string;
  classDropdownContainer?: string;
  tip?: string | React.ReactNode;
  classTip?: string;
  links?: Array<Object>;
  toggleOnHover?: boolean;
  doSomethingElse?: (key: boolean) => void;
};

export const Dropdown = ({
  Target,
  Content,
  toggle,
  setToggle,
  tip,
  links,
  toggleOnHover = false,
  className,
  classDropdownContainer,
  classTip
}: Props) => {
  const toggler = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outSideClick = function (event: MouseEvent) {
      if (toggler.current && !toggler.current.contains(event.target as Node)) {
        () => setToggle(false);
      }
    };

    document.addEventListener('mousedown', outSideClick);

    return () => {
      document.removeEventListener('mousedown', outSideClick);
    };
  }, []);

  const mouseEnterToggle = () => setToggle(true);
  const doNothing = () => setToggle(toggle);

  return (
    <div
      ref={toggler}
      className={`${className} pointer-events-auto`}
      onMouseEnter={toggleOnHover ? mouseEnterToggle : doNothing}
    >
      <div onClick={() => setToggle(!toggle)}>{<Target />}</div>
      {toggle && Content && <Content />}
      {toggle && links && (
        <div
          className={`${styles.dropdownMenu} ${classDropdownContainer}`}
          onMouseLeave={() => setToggle(false)}
        >
          {links.map((option: any, index: any) => (
            <Link key={index} href={option.href ?? ''}>
              <div className={styles.item} onClick={option.onClick}>
                {option.text}{' '}
                {option.icon && (
                  <div className={styles.icon}>{option.icon}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
      {toggle && tip && (
        <div className={`${styles.tip} ${classTip}`}>
          {tip && <div className={styles.item}>{tip}</div>}
        </div>
      )}
    </div>
  );
};
