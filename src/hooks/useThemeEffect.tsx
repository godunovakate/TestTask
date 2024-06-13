import { useEffect } from 'react';

export const useThemeEffect = (theme: string) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
};
