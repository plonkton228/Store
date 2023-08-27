import { RoutName } from 'app/types/RoutType'
import { AboutUs } from 'pages/Aboutus'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'
const RoutePaths: Record<RoutName, string> = {
    [RoutName.MAIN]: '/',
    [RoutName.ABOUT]: '/about',
    [RoutName.NOTFOUND]: '*'
}

export const Store: Record<RoutName, RouteProps> = {
    [RoutName.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [RoutName.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutUs/>
    },
    [RoutName.NOTFOUND]: {
        path: RoutePaths.notfound,
        element: <NotFoundPage/>
    }
}
