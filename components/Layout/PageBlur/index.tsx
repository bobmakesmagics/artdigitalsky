import styles from './PageBlur.module.scss';
import React, { useEffect } from 'react';

type Props = {
  blurActive: boolean;
  onClick: () => void;
};

const PageBlur = ({ blurActive, onClick }: Props) => {
  useEffect(() => {
    if (blurActive) {
      document.body.style.margin = '0';
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.margin = 'auto';
      document.body.style.height = 'auto';
      document.body.style.overflow = 'visible';
    }
  }, [blurActive]);

  return (
    <>{blurActive && <div onClick={onClick} className={styles.PageBlur} />}</>
  );
};

export default PageBlur;
