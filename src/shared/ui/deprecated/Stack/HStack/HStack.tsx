import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компонент устарел и больше не поддерживаеться
 * @deprecated
 */

export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
