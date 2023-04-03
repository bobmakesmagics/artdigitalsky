import { IconClose, IconSearch } from '@/components/Common/Icons';
import { useTheme } from 'next-themes';
import React from 'react';
import styles from './SearchInput.module.scss';

type Props = {
  className?: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onChange?: () => void;
  onClick?: () => void;
};

const SearchInput = ({
  className = '',
  searchTerm,
  setSearchTerm = () => {},
  placeholder,
  disabled = false,
  onChange = () => {},
  onClick
}: Props) => {
  const { theme } = useTheme();

  const handleClear = () => setSearchTerm('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onChange();
  };

  return (
    <div
      onClick={onClick}
      className={`${className} ${
        theme === 'dark' ? styles.SearchInputDark : styles.SearchInput
      } `}
    >
      <input
        placeholder={placeholder}
        disabled={disabled}
        type="search"
        onChange={handleChange}
        value={searchTerm}
      />
      <IconSearch
        className={`${styles.SearchInputIcon} dark:!text-light-gray`}
      />
      {searchTerm && (
        <button onClick={handleClear}>
          <IconClose className={styles.SearchInputClear} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
