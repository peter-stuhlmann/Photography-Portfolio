import React from 'react';
import { posts } from './data/BlogPosts';
import { text } from './data/Text';
import { landscapes, nudes, portraits } from './data/Photos';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        text,
        posts,
        landscapes,
        nudes,
        portraits,
      }}
    >
      {children}
    </Context.Provider>
  );
}
