

import type { Meta, StoryObj } from '@storybook/react';

import { ButtonCustom, ButtonTheme } from './ButtonCustom';

const meta: Meta<typeof ButtonCustom> = {
  component: ButtonCustom,
};

export default meta;
type Story = StoryObj<typeof ButtonCustom>;


export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Button"
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    theme: ButtonTheme.RESET
  }
};

export const Tertiary: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.SWITCHLANGUAGE
      }
};