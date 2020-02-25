import React from 'react';
import { posts } from './data/BlogPosts';
import { text } from './data/Text';
import { legal } from './data/LegalTexts';
import { landscapes, nudes, portraits } from './data/Photos';
import { trackingCode } from './helpers/analytics';
import { useLocalStorage } from './helpers/useLocalStorage';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [tracking, setTracking] = useLocalStorage('Tracking', false);

  const toggleTracking = () => {
    setTracking(!tracking);
  };

  const optInTracking = () => {
    setTracking(true);
  };

  const optOutTracking = () => {
    setTracking(false);
  };

  if (tracking === false) {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  } else {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  }

  const [themeMode, setThemeMode] = useLocalStorage('Theme', 'light');

  const toggleTheming = () => {
    themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  };

  return (
    <Context.Provider
      value={{
        text,
        posts,
        landscapes,
        nudes,
        portraits,
        legal,
        tracking,
        optInTracking,
        optOutTracking,
        toggleTracking,
        toggleTheming,
        themeMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}
