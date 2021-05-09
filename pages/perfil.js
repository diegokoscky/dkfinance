import HeadComponent from "../components/Head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import ProfileComponent from "../components/Profile";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <HeadComponent title="Perfil" />
            <Sidebar />
            <MainContent>
                <Navbar />
                <ProfileComponent />
                <Footer />
            </MainContent>
        </>
    );
}
