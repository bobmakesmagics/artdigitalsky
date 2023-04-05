import React, { useState } from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

type Props = {
  title: string | JSX.Element;
  content: string | JSX.Element;
  classNameCustom?: string;
  classNameActive?: string;
  toggleArrow?: JSX.Element;
};

export const Accordion = ({
  title,
  content,
  toggleArrow = (
    <KeyboardArrowDownOutlinedIcon
      className={`h-4 w-4 justify-end text-gray-c2 dark:!text-white`}
    />
  ),
  classNameCustom,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/***  Title container ***/}
      <motion.div
        className={`my-2 cursor-pointer items-center rounded-xl border-b border-gray-300 
        bg-[#eaebef]/26  p-6 dark:border-dark-default-1 dark:bg-dark-gray/50 dark:text-light-gray 
        dark:hover:brightness-110  ${classNameCustom}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between ">
          {title}
          {toggleArrow && (
            <motion.div
              animate={{
                scaleY: isOpen ? -1 : 1,
              }}
            >
              {toggleArrow}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/*** Content ***/}
      {isOpen && (
        <motion.div
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: '100%',
            transition: {
              duration: 0.75,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.75,
            },
          }}
          className={
            isOpen
              ? `px-6 pb-4 transition duration-1000 ease-[cubic-bezier(1,0,1,0)]`
              : ` transition duration-1000 ease-[cubic-bezier(0,1,0,1)]`
          }
        >
          {content}
        </motion.div>
      )}
    </>
  );
};
