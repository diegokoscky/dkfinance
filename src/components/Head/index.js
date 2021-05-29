import Head from "next/head";

export default function HeadComponent(props) {
    return (
        <Head>
            <title>{props.title} | DKFinance</title>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/favicon-16x16.png"
            />
            <meta name="theme-color" content="#8a2be2" />
            <meta name="language" content="pt-br" />
        </Head>
    );
}
