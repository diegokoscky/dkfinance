import Head from "next/head";
import CadastroComponent from "../components/Cadastro/index";

export default function Cadastro() {
    return (
        <>
            <Head>
                <title>DKFinance - Cadastro</title>
            </Head>
            <CadastroComponent />
        </>
    );
}
