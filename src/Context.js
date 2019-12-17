import React from 'react';
import { text } from './data/Text';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        text,
      }}
    >
      {children}
    </Context.Provider>
  );
}
