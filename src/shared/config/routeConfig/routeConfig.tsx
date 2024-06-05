import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import { AboutPage } from 'pages/AboutPage';

/**
* Список роутов приложения
*/
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
}

/**
* Пути страниц
*/
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
};

/**
 * Конфиг путей
 */
export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
