import React, { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState("");

  return (
    <NavbarContext.Provider
      value={{
        isToggle,
        setIsToggle,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(NavbarContext);
};
