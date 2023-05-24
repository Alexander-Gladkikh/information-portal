import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus eos eum fugit impedit, magnam maxime minus molestias nam nobis quaerat voluptas! Earum impedit, iusto maxime nesciunt optio quas quos sequi tempora? A ab animi commodi deleniti dicta doloremque ea et exercitationem facilis fuga inventore, ipsa ipsam iure libero molestiae perspiciatis quasi! Animi aperiam dolore eaque nemo nobis obcaecati similique sit suscipit tempore, veniam! At dolore est facere libero, magni repellat vitae. Alias corporis doloribus est magni nam placeat quae similique? Accusamus ad autem cumque dolorem est, facilis fugit minima molestiae nam nemo provident quaerat quod, ratione sit voluptatem voluptatum?
            </Modal>
        </div>
    );
};
