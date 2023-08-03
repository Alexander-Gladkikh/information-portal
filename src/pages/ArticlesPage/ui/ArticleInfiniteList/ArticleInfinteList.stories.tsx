import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleInfinteList } from './ArticleInfinteList';

export default {
    title: 'pages/ArticleInfinteList/ArticleInfinteList',
    component: ArticleInfinteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfinteList>;

const Template: ComponentStory<typeof ArticleInfinteList> = (args) => <ArticleInfinteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
