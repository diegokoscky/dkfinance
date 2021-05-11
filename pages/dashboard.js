import HeadComponent from "../components/Head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import HeadContent from "../components/HeadContent";
import DashboardComponent from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <>
            <HeadComponent title="Dashboard" />
            <Sidebar />
            <MainContent>
                <Navbar />
                <HeadContent title="Dashboard" />
                <DashboardComponent />
                <Footer />
            </MainContent>
        </>
    );
}
