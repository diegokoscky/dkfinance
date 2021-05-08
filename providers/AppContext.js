import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <AppContext.Provider value={[sidebarToggle, setSidebarToggle]}>
            {children}
        </AppContext.Provider>
    );
};
