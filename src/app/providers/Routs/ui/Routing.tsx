import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Store } from '../lib/RoutStore'

export const Routing: React.FC = () => {
    return (<>
        <Suspense>
            <Routes>
                {
                    Object.values(Store).map((child) => <Route key={child.path} id= {child.path} path= {child.path} element = {child.element}/>)
                }
            </Routes>

        </Suspense>

    </>)
}
