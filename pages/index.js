import Head from "next/head";
import LoginComponent from "../components/Login/index";

export default function Login() {
    return (
        <>
            <Head>
                <title>DKFinance - Login</title>
            </Head>
            <LoginComponent />
        </>
    );
}
