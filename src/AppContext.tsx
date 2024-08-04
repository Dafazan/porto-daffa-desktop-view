import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  showDiv1: boolean;
  showDiv2: boolean;
  toggleDiv1: () => void;
  toggleDiv2: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1((prev) => !prev);
  };

  const toggleDiv2 = () => {
    setShowDiv2((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ showDiv1, showDiv2, toggleDiv1, toggleDiv2 }}>
      {children}
    </AppContext.Provider>
  );
};
