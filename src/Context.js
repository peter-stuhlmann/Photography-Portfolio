import React from 'react';
import { posts } from './data/BlogPosts';
import { text } from './data/Text';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        text,
        posts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
