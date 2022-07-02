import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { Divider } from '../divider/Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
} as Meta;

const Template: Story = (args) => <Divider {...args}>My Divider</Divider>;

export const Default = Template.bind({});
Default.args = {
    alignment: 'center',
    styled: 'solid',
    weight: 'regular',
};