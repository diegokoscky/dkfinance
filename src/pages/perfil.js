import HeadComponent from "../components/Head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import ProfileContent from "../components/Profile";
import { useContext } from "react";
import { AppContext } from "../providers/AppContext";
import Forbidden from "../components/Forbidden";

export default function Profile() {
    // Recebe o estado do Auth do AppProvider
    const { authentication } = useContext(AppContext);
    const [auth, setAuth] = authentication;

    if (auth) {
        return (
            <>
                <HeadComponent title="Perfil" />
                <Sidebar />
                <MainContent>
                    <Navbar />
                    <HeadContent title="Perfil" />
                    <ProfileContent />
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
