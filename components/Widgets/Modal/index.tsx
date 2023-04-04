import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { Suspense } from 'react';

type Props = {
  modalImage: string;
  modalImageClass?: string;
  width?: string;
  modalTitle: string | React.ReactNode;
  modalBg?: string;
  modalTextPrompt?: string;
  styleTextPrompt?: string;
  styleCloseIcon?: string;
  escKeyFunc: () => void;
  modalContent?: JSX.Element;
  cancelButtonText?: string;
  confirmButtonText?: string;
  cancelBtnFunc?: () => void;
};

const Modal = ({
  modalImage,
  modalImageClass = 'object-cover',
  modalTitle,
  modalBg,
  modalTextPrompt,
  styleTextPrompt,
  styleCloseIcon,
  escKeyFunc,
  modalContent,
  width = '',
  cancelButtonText,
  confirmButtonText,
  cancelBtnFunc,
}: Props) => {
  ///////////// Modal entrance/exit animation /////////////
  const dropIn = {
    initial: {
      y: '-100vh',
      opacity: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
    exit: { y: '100vh', opacity: 1 },
  };
  //////////////////////////////////////////////////////

  const altText = () => {
    if (typeof modalTitle === typeof 'hi') {
      return modalTitle;
    } else {
      return 'modal background image';
    }
  };
  return (
    // OVERLAY
    <div
      className="z-[99] fixed fixed top-0 bottom-0 left-0 right-0 flex h-screen w-screen flex-col items-center justify-center bg-[#13121E]/90 backdrop-blur-[2px] dark:bg-violet-900/20 items-center"
      onClick={escKeyFunc}
    >
      {/* CONTAINER */}

      <motion.div
        variants={dropIn}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`scrollbar-hide z-50 mx-auto max-h-[650px] w-[85%] overflow-y-auto rounded-2xl 
             bg-white dark:bg-dark-default sm:w-[576px] ${width}`}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {/* TOP BANNER IMAGE */}
        <div className={`flex w-full rounded-t-2xl md:h-[234px] ${modalBg}`}>
          <Suspense
            fallback={<div className="skeleton min-h-[200px] w-full"></div>}
          >
            <div className="relative min-h-[200px] w-full">
              <Image
                src={modalImage}
                className={`rounded-t-2xl ${modalImageClass}`}
                alt="modal background image"
                fill
              />
            </div>
          </Suspense>
          <button
            aria-label="close modal"
            onClick={escKeyFunc}
            className={`absolute top-3 right-3 hover:text-primary ${styleCloseIcon}`}
          >
            <AiOutlineCloseCircle
              size="30"
              className="z-50 dark:hover:text-dark-pri"
            />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col p-[32px]">
          {/* MODAL HEADER */}
          <div className="mb-8 items-center dark:border-[#2C2A52]">
            <h1 className="pt-[2px] text-center font-bold text-2xl font-700 text-gray-600 dark:text-white">
              {modalTitle}
            </h1>
            <p
              className={`pt-2 text-center text-sm text-gray-500 dark:text-light-gray ${styleTextPrompt}`}
            >
              {modalTextPrompt}
            </p>
          </div>

          {/* MODAL CONTENT */}
          {modalContent}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
