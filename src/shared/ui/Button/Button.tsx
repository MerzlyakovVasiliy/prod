import classNames from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import * as cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...overProps
    } = props;
    console.log('cls.Button:', cls.Button); // добавьте это
    console.log('cls[theme]:', cls[theme]); // и это
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...overProps}
            type="button"
        >
            {children}
        </button>
    );
};
