import classNames from 'shared/lib/classNames/classNames';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import * as cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'primary',
    ERROR = 'error',
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = AppLinkTheme.PRIMARY,
    } = props;

    const mods = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            <div>
                {title && <p className={cls.title}>{title}</p>}
                {text && <p className={cls.text}>{text}</p>}
            </div>

        </div>
    );
};
