import { RoutName } from 'app/types/RoutType'
import { AboutUs } from 'pages/Aboutus'
import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'
const RoutePaths: Record<RoutName, string> = {
    [RoutName.MAIN]: '/',
    [RoutName.ABOUT]: '/about'
}

export const Store: Record<RoutName, RouteProps> = {
    [RoutName.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [RoutName.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutUs/>
    }
}
