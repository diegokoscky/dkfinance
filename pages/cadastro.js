import Head from 'next/head'
import CadastroComponent from '../components/Cadastro/index'
import Notify from '../components/Notify/index'

export default function Cadastro() {
    return (
        <>
            <Head>
                <title>DKFinance - Cadastro</title>
            </Head>
            <Notify />
            <CadastroComponent />
        </>
    )
}
