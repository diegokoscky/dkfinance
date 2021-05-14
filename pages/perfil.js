import HeadComponent from "../components/Head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import ProfileContent from "../components/Profile";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <HeadComponent title="Perfil" />
            <Sidebar />
            <MainContent>
                <Navbar />
                <HeadContent title="Perfil" />
                <ProfileContent />
                <Footer />
            </MainContent>
        </>
    );
}
