import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
    } = props;

    return (
        <HListbox
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListbox.Button
                className={cls.trigger}
            >
                <Button>
                    {defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {items && items.map((item) => (
                    <HListbox.Option
                        key={item.value}
                        value={item.value}
                        as={Fragment}
                        disabled={item.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}
                            >
                                {selected && '!'}
                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
