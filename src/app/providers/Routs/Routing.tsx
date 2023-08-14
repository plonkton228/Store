import { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import RoutStore from "./RoutStore"

const Routing : React.FC = () => {
    return (<>
     <Suspense>
        <Routes>
          {
            RoutStore().map((e)=> <Route key={e.path} path= {e.path} element = {e.element}/>)
          }
        </Routes>
     </Suspense>
    
    </>)
}

export default Routing