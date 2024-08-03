'use client'
import { createContext } from "react";
import { LocalesType, WithChildrenComponent } from "../types";

export const mainContext = createContext({
    locales: {}
} as {
    locales: {
        [key: string]: string;
    }
})

const MainContextProvider: WithChildrenComponent<{ locales: LocalesType['locales'] }> = ({ locales, children }) => {
    return (<mainContext.Provider value={{
        locales
    }}>
        {children}
    </mainContext.Provider>);
}

export default MainContextProvider;