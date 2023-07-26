import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <div>sdvdb</div>
            <HStack>
                <div>dfbsfb</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '12', content: '1ba', disabled: true },
                        { value: '13', content: 'asdvrg' },
                    ]}
                />
            </HStack>
            <div>dsgsd</div>
            <div>dsgsd</div>
            <div>dsgsd</div>
            <div>dsgsd</div>
            <div>dsgsd</div>
        </div>
    );
});

export default memo(MainPage);
