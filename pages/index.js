import Head from 'next/head'
import LoginComponent from '../components/Login/index'
import Notify from '../components/Notify/index'

export default function Login() {
    return (
        <>
            <Head>
                <title>DKFinance - Login</title>
            </Head>
            <Notify />
            <LoginComponent />
        </>
    )
}
