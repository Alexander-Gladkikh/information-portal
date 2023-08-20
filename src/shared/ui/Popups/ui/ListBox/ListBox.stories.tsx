import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as Meta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '124',
    items: [
        { content: '2sdgsbdfbs', value: '124' },
        { content: '2sdgsbdfbssdbs', value: '12465' },
        { content: '2sdgsbdzcvsd', value: '124xcv' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '124',
    items: [
        { content: '2sdgsbdfbs', value: '124' },
        { content: '2sdgsbdfbssdbs', value: '12465' },
        { content: '2sdgsbdzcvsd', value: '124xcv' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '124',
    items: [
        { content: '2sdgsbdfbs', value: '124' },
        { content: '2sdgsbdfbssdbs', value: '12465' },
        { content: '2sdgsbdzcvsd', value: '124xcv' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '124',
    items: [
        { content: '2sdgsbdfbs', value: '124' },
        { content: '2sdgsbdfbssdbs', value: '12465' },
        { content: '2sdgsbdzcvsd', value: '124xcv' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '124',
    items: [
        { content: '2sdgsbdfbs', value: '124' },
        { content: '2sdgsbdfbssdbs', value: '12465' },
        { content: '2sdgsbdzcvsd', value: '124xcv' },
    ],
};
