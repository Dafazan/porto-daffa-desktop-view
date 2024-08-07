import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  showDiv1: boolean;
  hideDiv1: boolean;
  hideMail: boolean;
  showMail: boolean;
  topFile: boolean;
  topMail: boolean;
  toggleDiv1: () => void;
  toggleHideDiv1: () => void;
  toggleHideMail: () => void;
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
  const [showDiv1, setShowDiv1] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [hideDiv1, setHideDiv1] = useState(false);
  const [hideMail, setHideMail] = useState(false);

  const [topFile, setTopFile] = useState(false);
  const [topMail, setTopMail] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1((prev) => !prev);
  };
  const toggleHideDiv1 = () => {
    setHideDiv1((prev) => !prev);
  };
  const toggleHideMail = () => {
    setHideMail((prev) => !prev);
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
        hideDiv1,
        hideMail,
        toggleHideDiv1,
        toggleHideMail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
