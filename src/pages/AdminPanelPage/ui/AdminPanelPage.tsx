import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('Страница администратора')}
        </div>
    );
});

export default AdminPanelPage;
