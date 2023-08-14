import Routing from './providers/Routs/Routing'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import useTheme from '../share/libs/Theme/useTheme'
   import useClassName from 'share/libs/ClassNames/useClassName'
const App : React.FC =  () =>  {
  const {theme, toggleTheme} = useTheme() 
  return(<>
   <div className={useClassName({cls :'app', mode: {}, classes: [theme]})}>
      <Link to = "/">Maing Page </Link>
      <Link to = "/about"> About Page </Link>
      <button onClick={()=> toggleTheme(theme)}>Change</button>
      <Routing/>

   </div>
     
   
  </>)
}
export default App