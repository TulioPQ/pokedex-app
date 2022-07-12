import AppRoutes from './pages/routes'
import { createGlobalStyle } from 'styled-components'
import { GlobalHeader } from './components/header'
import { ThemeProvider } from './context'

function App() {
    return (
        <>
            <ThemeProvider>
                <GlobalHeader />
                <GlobalStyle />
                <AppRoutes />
            </ThemeProvider>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }
    
    a {
        color: black;
        text-decoration: none;
    }
`

export default App;
