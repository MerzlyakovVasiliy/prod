import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { MainPage } from 'pages/MainPage';

type AppRoutProps = RouteProps & {
    authOnly?: boolean
}

/**
* Список роутов приложения
*/
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUD = 'not_found',
}

/**
* Пути страниц
*/
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile',
    [AppRouters.NOT_FOUD]: '/*',
};

/**
 * Конфиг путей
 */
export const routeConfig: Record<AppRouters, AppRoutProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRouters.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouters.NOT_FOUD]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },

};
