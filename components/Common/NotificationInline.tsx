import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const dropIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  exit: { opacity: 0 }
};

type Props = {
  handleClose: () => void;
  message: string;
  messageStyle?: string;
  timeout?: string;
  btn?: boolean;
  containerStyle?: string;
};

const NotificationInline = ({
  handleClose,
  btn,
  message,
  messageStyle,
  timeout = 'yes',
  containerStyle = ''
}: Props) => {
  const router = useRouter();

  {
    // close Notification after 3 seconds
    timeout &&
      setTimeout(() => {
        handleClose();
      }, 2000);
  }
  return (
    <motion.div
      className={`zIndex9999 absolute !-mt-[70px] min-w-[20px] rounded-xl bg-dark-gray py-[12px] px-[16px] 
       text-[14px] font-400 text-light-gray shadow-xl ${containerStyle}`}
      variants={dropIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {message}
    </motion.div>
  );
};

export default NotificationInline;
