import "../styles/globals.scss";
import { AppProvider } from "../providers/AppContext";
import { ThemeProvider } from "../providers/ThemeContext";
import { AuthProvider } from "../providers/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <AppProvider>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AppProvider>
        </AuthProvider>
    );
}

export default MyApp;
