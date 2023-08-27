import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/reset.scss'
import { ThemeProvider } from 'app/providers/Themes/index'
import 'share/libs/i18next/i18next'
import { LoaderWidget } from 'widgets/LoaderWidget/ui/LoaderWidget'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <ThemeProvider>
        <BrowserRouter>
            <Suspense fallback = {<LoaderWidget/>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </ThemeProvider>
</>)
