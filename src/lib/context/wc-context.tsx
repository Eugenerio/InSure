import React, { createContext, useState, useContext, ReactNode } from 'react';
import {toast} from "react-toastify";

interface WCAuthData {
    iv: string;
    payload: string;
}


interface WCContext {
    wcAuthData: WCAuthData | null;
    wcSaveAuthData: (iv: string, payload: string) => void;
}


const WCContext = createContext<WCContext | undefined>(undefined);


interface WCProviderProps {
    children: ReactNode;
}


export const WCProvider: React.FC<WCProviderProps> = ({ children }) => {
    const [wcAuthData, setWcAuthData] = useState<WCAuthData | null>(null);


    const wcSaveAuthData = (iv: string, payload: string) => {
        setWcAuthData({ iv, payload });
    };

    return (
        <WCContext.Provider value={{ wcAuthData, wcSaveAuthData }}>
            {children}
        </WCContext.Provider>
    );
};


export const useWCContext = (): WCContext => {
    const context = useContext(WCContext);
    if (!context) {
        toast("useAuth must be used within an AuthProvider", {
            type: "error"
        });
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
