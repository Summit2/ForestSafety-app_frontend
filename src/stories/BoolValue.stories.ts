import type { Meta, StoryObj } from '@storybook/react';

import { BoolValue } from '../components/BoolValue/BoolValue';

const meta = {
  title: 'Map/Components/BoolValue',
  component: BoolValue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textType: { control: 'select', 
                  options: ['text', 'small-text', 'text-help-link'],
                  defaultValue: 'blue' },
    checked: { control: 'boolean', },
    name: { control: 'text' },
  },
} satisfies Meta<typeof BoolValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UncheckedValue: Story = {
  args: {
    name: 'Объект',
    checked: false,
  },
};

export const CheckedValue: Story = {
    args: {
      name: 'Объект',
      checked: true,
    },
};

export const SmallUncheckedValue: Story = {
  args: {
    name: 'Объект',
    checked: false,
    textType: 'small-text',
  },
};

export const SmallCheckedValue: Story = {
  args: {
    name: 'Объект',
    checked: true,
    textType: 'small-text',
  },
};

export const TextHelpLink: Story = {
  args: {
    name: 'Объект',
    checked: true,
    textType: 'text-help-link',
  },
};

