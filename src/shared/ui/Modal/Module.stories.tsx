import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from '../Modal/Modal';

export default {
    title: 'shared/Module',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus eos eum fugit impedit, magnam maxime minus molestias nam nobis quaerat voluptas! Earum impedit, iusto maxime nesciunt optio quas quos sequi tempora? A ab animi commodi deleniti dicta doloremque ea et exercitationem facilis fuga inventore, ipsa ipsam iure libero molestiae perspiciatis quasi! Animi aperiam dolore eaque nemo nobis obcaecati similique sit suscipit tempore, veniam! At dolore est facere libero, magni repellat vitae. Alias corporis doloribus est magni nam placeat quae similique? Accusamus ad autem cumque dolorem est, facilis fugit minima molestiae nam nemo provident quaerat quod, ratione sit voluptatem voluptatum?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus eos eum fugit impedit, magnam maxime minus molestias nam nobis quaerat voluptas! Earum impedit, iusto maxime nesciunt optio quas quos sequi tempora? A ab animi commodi deleniti dicta doloremque ea et exercitationem facilis fuga inventore, ipsa ipsam iure libero molestiae perspiciatis quasi! Animi aperiam dolore eaque nemo nobis obcaecati similique sit suscipit tempore, veniam! At dolore est facere libero, magni repellat vitae. Alias corporis doloribus est magni nam placeat quae similique? Accusamus ad autem cumque dolorem est, facilis fugit minima molestiae nam nemo provident quaerat quod, ratione sit voluptatem voluptatum?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
