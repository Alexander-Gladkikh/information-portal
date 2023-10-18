import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * Компонент устарел и больше не поддерживаеться
 * @deprecated
 */

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherPros } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherPros}
        />
    );
});