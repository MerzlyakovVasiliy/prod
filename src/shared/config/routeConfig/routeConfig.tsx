import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

/**
* Список роутов приложения
*/
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUD = 'not_found',
}

/**
* Пути страниц
*/
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOT_FOUD]: '/*',
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
    [AppRouters.NOT_FOUD]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
