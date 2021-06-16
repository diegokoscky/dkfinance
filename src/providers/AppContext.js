import { useState, createContext, useEffect } from "react";
import { parseCookies } from "nookies";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    /* AUTENTICAÇÃO */
    const [auth, setAuth] = useState();

    // Busca os cookies do usuário
    const userCookies = parseCookies();

    // Cookies do usuário
    const _adkfCookie = userCookies._adkf;
    const _audkfCookie = userCookies._audkf;
    const _apdkfCookie = userCookies._apdkf;

    useEffect(() => {
        if (_adkfCookie && _audkfCookie && _apdkfCookie) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    /* NIGHT MODE */
    const [nightMode, setNightMode] = useState();

    const themeCookie = userCookies.NIGHTM;

    useEffect(() => {
        if (themeCookie) {
            setNightMode(true);
        } else {
            setNightMode(false);
        }
    }, []);

    /* NOTIFICATION */
    const [notification, setNotification] = useState();

    /* MODAL */
    const [modal, setModal] = useState();

    /* SIDEBAR */
    const [sidebarToggle, setSidebarToggle] = useState(false);

    /* LOADING BUTTON */
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
                    nightMode && _adkfCookie
                        ? "application night-mode "
                        : "application"
                }
            >
                {children}
            </div>
        </AppContext.Provider>
    );
};
