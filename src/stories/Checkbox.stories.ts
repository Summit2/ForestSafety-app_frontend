import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../components/Checkbox/Checkbox';

const meta = {
  title: 'Map/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
    args: {
      checked: true,
    },
  };

