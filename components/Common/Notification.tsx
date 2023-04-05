import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

const dropIn = {
  initial: {
    y: '-150vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      //   delay: 0.7,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: '100vh', opacity: 0 },
};

type Props = {
  handleClose: () => void;
  goUrl?: string;
  icon?: React.ReactNode;
  message: string;
  messageStyle?: string;
  timeout?: string;
  btn?: boolean;
};

const Notification = ({
  handleClose,
  goUrl = '/',
  icon,
  message,
  messageStyle = 'w-full',
  timeout = 'yes',
  btn = false,
}: Props) => {
  const router = useRouter();

  {
    // close Notification after 5 seconds
    timeout &&
      setTimeout(() => {
        handleClose();
      }, 5000);
  }
  return (
    <motion.div
      className={`!z-[999] absolute top-5 right-2 flex w-[95%] items-center rounded-xl border border-light-gray-1
        bg-white p-[16px] shadow-2xl dark:border-transparent dark:bg-dark-default-1 sm:right-5 sm:w-[350px]`}
      variants={dropIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <>
        <button onClick={handleClose} className="">
          <CloseIcon className="hover:bg-gray/10 text-gray absolute top-3 right-3 h-auto w-[20px] rounded-md hover:text-primary dark:hover:text-dark-pri" />
        </button>

        {icon}
        <div className="mx-[20px] flex flex-col ">
          <div className="flex flex-row">
            <p
              className={`w-[100%] text-[14px] font-500 leading-[22px] text-gray-c2 line-clamp-2 dark:text-light-gray ${messageStyle}`}
            >
              {message}
            </p>

            {btn && (
              <button
                onClick={() => router.push(goUrl)}
                className="btn btn-primary mt-[6px] mr-[16px] h-[20px] w-[60px]"
              >
                View
              </button>
            )}
          </div>

          {timeout && (
            <motion.div
              initial={{ width: '1' }}
              animate={{ width: '0' }}
              transition={{ duration: 5 }}
              className="mt-3 h-2 w-full rounded-full bg-gradient-to-r from-[#FF9C7D] via-[#FE54A5] to-[#970BD9] shadow-xl"
            ></motion.div>
          )}
        </div>
      </>
    </motion.div>
  );
};

export default Notification;
