import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { MainPage } from 'pages/MainPage';

/**
* Список роутов приложения
*/
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile',
    NOT_FOUD = 'not_found',
}

/**
* Пути страниц
*/
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE_PAGE]: '/profile',
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
    [AppRouters.PROFILE_PAGE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRouters.NOT_FOUD]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },

};
