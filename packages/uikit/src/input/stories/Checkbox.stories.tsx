import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import {Checkbox} from '..';

export default {
  title: 'Mmid/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}>Checkbox</Checkbox>;

export const Regular = Template.bind({});
Regular.args = {};
