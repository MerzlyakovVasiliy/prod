import classNames from 'shared/lib/classNames/classNames';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...overProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...overProps}
        >
            {children}
        </Link>
    );
};
