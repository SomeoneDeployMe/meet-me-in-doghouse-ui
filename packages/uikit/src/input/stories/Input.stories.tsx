import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import {Input} from '..';

export default {
  title: 'Mmid/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  value: 'Text field',
};
