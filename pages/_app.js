import '../styles/globals.scss'
import {DataProvider} from '../central/GlobalState'

function MyApp({Component, pageProps}) {
    return (
        <DataProvider>
            <Component {...pageProps}/>
        </DataProvider>        
    )
}

export default MyApp
