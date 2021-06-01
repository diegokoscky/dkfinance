import "../styles/globals.scss";
import { AppProvider } from "../providers/AppContext";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}

export default MyApp;
