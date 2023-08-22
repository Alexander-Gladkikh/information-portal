import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};

export default ForbiddenPage;
