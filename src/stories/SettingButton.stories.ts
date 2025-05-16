import type { Meta, StoryObj } from '@storybook/react';

import { SettingButton } from '../components/SettingButton/SettingButton';

const meta = {
  title: 'Map/Components/SettingButton',
  component: SettingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', 
                  options: ['big', 'small'],
                  defaultValue: 'big' },
  },
} satisfies Meta<typeof SettingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    size: 'big',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};