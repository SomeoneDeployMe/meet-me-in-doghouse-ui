import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import {Button} from '..';

export default {
  title: 'Mmid/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
