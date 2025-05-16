import type { Meta, StoryObj } from '@storybook/react';

import { ExitButton } from '../components/ExitButton/ExitButton';

const meta = {
  title: 'Map/Components/ExitButton',
  component: ExitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', 
                  options: ['big', 'small'],
                  defaultValue: 'big' },
  },
} satisfies Meta<typeof ExitButton>;

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