import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import * as cls from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Modal onClose={onToggleAuthModal} isOpen={isAuthModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, consequatur eligendi enim in incidunt, magnam nemo porro quam repellendus saepe sit totam voluptates! Commodi harum labore natus unde voluptatem. Ab aspernatur aut commodi dolorum, esse illo in iste maiores maxime neque odio quibusdam recusandae sunt tenetur vero voluptate voluptatibus. Aperiam asperiores at dignissimos esse eum quia sed velit. Consectetur cum deleniti enim ex fuga laudantium pariatur ratione repellendus tenetur veritatis. A accusantium, asperiores cum debitis deleniti illum magnam molestias nulla officia possimus quia sit temporibus vel velit voluptatem. A, debitis harum ipsa optio quisquam sunt unde velit voluptatem voluptates.
            </Modal>
            <Button
                onClick={onToggleAuthModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
