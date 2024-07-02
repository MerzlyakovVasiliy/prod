import classNames from 'shared/lib/classNames/classNames';
import * as cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => {
    console.log('as');
    return (
        <div className={classNames(cls.User, {}, [className])}>
            s
        </div>
    );
};
