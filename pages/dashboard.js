import Head from "next/head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import DashboardComponent from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>DKFinance - Dashboard</title>
            </Head>
            <Sidebar />
            <MainContent>
                <Navbar />
                <DashboardComponent />
                <Footer />
            </MainContent>
        </>
    );
}
