import React, { Dispatch, SetStateAction, useState } from 'react';

export type AppState = {
  theme?: 'dark' | 'light';
  setTheme?: Dispatch<SetStateAction<'dark' | 'light'>>;
};

export const useAppState = (): AppState => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return {
    theme,
    setTheme,
  };
};

export default React.createContext<AppState>({
  theme: 'dark',
});
