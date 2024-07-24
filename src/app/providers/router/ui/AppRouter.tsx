import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

/**
 * Элемент роутинга
 */
export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        console.log('a');
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                console.log('a');
                return false;
            }
            return true;
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
