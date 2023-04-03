import React, { useEffect, useRef } from 'react';

type Props = {
  Target: () => JSX.Element;
  Content: () => JSX.Element;
  id: string;
  toggle: {
    key: string;
  };
  setToggle: (key: string) => void;
  className?: string;
};

export const Dropdown = ({
  Target,
  Content,
  toggle,
  id,
  setToggle,
  className
}: Props) => {
  const toggler = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outSideClick = function (event: MouseEvent) {
      if (
        toggler.current &&
        !toggler.current.contains(event.target as Node) &&
        toggle.key === id
      ) {
        setToggle('');
      }
    };

    document.addEventListener('mousedown', outSideClick);

    return () => {
      document.removeEventListener('mousedown', outSideClick);
    };
  }, [toggle]);

  return (
    <div ref={toggler} className={className} id={id}>
      <div onClick={() => setToggle(id)}>{<Target />}</div>
      {toggle.key === id && <Content />}
    </div>
  );
};
