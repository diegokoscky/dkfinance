import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardComponent from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>DKFinance - Dashboard</title>
            </Head>
            <Navbar />
            <Sidebar />
            <DashboardComponent />
            <Footer />
        </>
    );
}
