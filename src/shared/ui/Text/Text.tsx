import classNames from 'shared/lib/classNames/classNames';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import * as cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = AppLinkTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            <div>
                {title && <p className={cls.title}>{title}</p>}
                {text && <p className={cls.text}>{text}</p>}
            </div>

        </div>
    );
});
