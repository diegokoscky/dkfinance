import HeadComponent from "../components/Head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import DashboardComponent from "../components/Dashboard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthContext";
import { parseCookies } from "nookies";
import Forbidden from "../components/Forbidden";

export default function Dashboard() {
    // Recebe o estado do AuthProvider
    const [auth, setAuth] = useContext(AuthContext);

    // Busca os cookies
    const authCookie = parseCookies();

    // Atualiza o estado do AuthProvider com o cookie de autenticação
    useEffect(() => {
        setAuth(authCookie.AUTH);
    }, []);

    if (auth) {
        return (
            <>
                <HeadComponent title="Dashboard" />
                <Sidebar />
                <MainContent>
                    <Navbar />
                    <HeadContent title="Dashboard" />
                    <DashboardComponent />
                </MainContent>
            </>
        );
    } else {
        return (
            <>
                <Forbidden />
            </>
        );
    }
}
