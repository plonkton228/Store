import './styles/index.scss'
import useTheme from 'share/libs/Theme/useTheme'
import useClassName from 'share/libs/ClassNames/useClassName'
import { Routing } from './providers/Routs/index'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'pages/SideBar/ui/SideBar'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (<>
        <div className={useClassName({ cls: 'app', mode: {}, classes: [theme] })}>
            <NavBar/>
            <SideBar>
                <Routing/>
            </SideBar>
        </div>
    </>)
}
export default App
