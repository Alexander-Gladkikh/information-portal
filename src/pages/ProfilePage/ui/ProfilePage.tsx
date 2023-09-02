import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { HStack, VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <HStack max justify="end">
            <Page
                data-testid="ProfilePage"
                className={classNames('', {}, [className])}
            >
                <VStack gap="16" max>
                    <EditableProfileCard id={id} />
                </VStack>
            </Page>
        </HStack>
    );
};

export default memo(ProfilePage);
