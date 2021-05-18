import "../styles/globals.scss";
import { AppProvider } from "../providers/AppContext";
import { ThemeProvider } from "../providers/ThemeContext";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </AppProvider>
    );
}

export default MyApp;
