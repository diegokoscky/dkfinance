import { useState, createContext, useEffect } from "react";
import { parseCookies } from "nookies";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Busca os cookies do usuário
    const userCookies = parseCookies();

    /* Autenticação */
    const [auth, setAuth] = useState();
    const authCookie = userCookies.AUTH;

    useEffect(() => {
        if (authCookie) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    /* Night mode */
    const [nightMode, setNightMode] = useState();

    const themeCookie = userCookies.NIGHTM;

    useEffect(() => {
        if (themeCookie) {
            setNightMode(true);
        } else {
            setNightMode(false);
        }
    }, []);

    /* Notification */
    const [notification, setNotification] = useState();

    /* Modal */
    const [modal, setModal] = useState();

    /* Sidebar */
    const [sidebarToggle, setSidebarToggle] = useState(false);

    /* Loading Button */
    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider
            value={{
                authentication: [auth, setAuth],
                theme: [nightMode, setNightMode],
                notification: [notification, setNotification],
                modal: [modal, setModal],
                sidebar: [sidebarToggle, setSidebarToggle],
                loadingButton: [loading, setLoading],
            }}
        >
            <div
                className={
                    nightMode && authCookie
                        ? "application night-mode "
                        : "application"
                }
            >
                {children}
            </div>
        </AppContext.Provider>
    );
};
