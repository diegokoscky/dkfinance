import Head from 'next/head'
import Login from '../components/Login/Login'

export default function Home() {
    return (
        <>
            <Head>
                <title>DKFinance</title>
            </Head>
            <Login />
        </>
    )
}
