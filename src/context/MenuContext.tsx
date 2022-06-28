import React, { createContext, ReactNode, useState } from 'react';

type MenuContextProviderProps = {
  children: ReactNode;
};

type MenuContextType = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

export const MenuContext = createContext({} as MenuContextType);

export function MenuContextProvider(props: MenuContextProviderProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <MenuContext.Provider value={{ toggle, setToggle }}>
      {props.children}
    </MenuContext.Provider>
  );
}
