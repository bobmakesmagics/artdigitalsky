import { IconClosecircle, IconMenu } from '@/components/Common/Icons';

type Props = {
  isOpen: boolean;
  setIsOpen: Function;
};
export const MenuCollapse = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
      >
        <IconMenu
          className={`fill-current h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
        />
        <IconClosecircle
          className={`fill-current h-5 w-5 ${isOpen ? 'block' : 'hidden'}`}
        />
      </button>
    </div>
  );
};
