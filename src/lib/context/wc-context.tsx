import React, { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";

interface WCContext {
  proof: string | null;
  setProof: (proof: string) => void;
}

const WCContext = createContext<WCContext | undefined>(undefined);

interface WCProviderProps {
  children: ReactNode;
}

export const WCProvider: React.FC<WCProviderProps> = ({ children }) => {
  const [proof, setProof] = useState<string | null>(null);

  return (
    <WCContext.Provider value={{ proof, setProof }}>
      {children}
    </WCContext.Provider>
  );
};

export const useWCContext = (): WCContext => {
  const context = useContext(WCContext);
  if (!context) {
    toast("useWCContext must be used within a WCProvider", {
      type: "error",
    });
    throw new Error("useWCContext must be used within a WCProvider");
  }
  return context;
};
