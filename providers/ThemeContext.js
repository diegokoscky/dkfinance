import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [nightMode, setNightMode] = useState(false);

    return (
        <ThemeContext.Provider value={[nightMode, setNightMode]}>
            <div
                className={
                    nightMode ? "application night-mode " : "application"
                }
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
