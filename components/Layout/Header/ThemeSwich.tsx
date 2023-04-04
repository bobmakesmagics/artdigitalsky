import { IconMoon, IconSun } from '@/components/Common/Icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwich = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center mt-4 lg:mt-0 mr-4 float-right">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <IconMoon className="h-5" />
        ) : (
          <IconSun className="h-5" />
        )}
      </button>
    </div>
  );
};
