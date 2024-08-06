import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  showDiv1: boolean;
  showMail: boolean;
  topFile: boolean;
  topMail: boolean;
  toggleDiv1: () => void;
  toggleMail: () => void;
  toggleFiletop: () => void;
  toggleMailtop: () => void;
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
  const [showMail, setShowMail] = useState(false);
  const [topFile, setTopFile] = useState(false);
  const [topMail, setTopMail] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1((prev) => !prev);
  };

  const toggleMail = () => {
    setShowMail((prev) => !prev);
  };
  const toggleFiletop = () => {
    setTopFile(true);
    setTopMail(false);
  };
  const toggleMailtop = () => {
    setTopMail(true);
    setTopFile(false);
  };

  return (
    <AppContext.Provider
      value={{
        showDiv1,
        showMail,
        toggleDiv1,
        toggleMail,
        toggleFiletop,
        toggleMailtop,
        topFile,
        topMail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
