import { useEffect, useState } from 'react';

import { getPreferredSystemTheme, asyncLocalStorage } from './helpers';

export function useDarkHook(defaultMode) {
  const [mode, setMode] = useState();

  useEffect(() => {
    asyncLocalStorage.getItem('user_theme').then(res => {
      if (res !== null) {
        return setMode(res);
      } else {
        if (defaultMode) {
          asyncLocalStorage.setItem('user_theme', defaultMode).then(() => {
            return setMode(defaultMode);
          });
        } else {
          let systemTheme = getPreferredSystemTheme();
          if (systemTheme === 'dark' || systemTheme === 'light') {
            return setMode(systemTheme);
          }
        }
      }
    });
  }, []);

  const toggleMode = () => {
    console.log('toggling...');
  };

  return [mode, toggleMode];
}
