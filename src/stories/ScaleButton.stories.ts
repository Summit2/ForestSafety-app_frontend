import type { Meta, StoryObj } from '@storybook/react';

import { ScaleButton } from '../components/ScaleComponents/ScaleButton/ScaleButton';

const meta = {
  title: 'Map/Components/ScaleComponents/ScaleButton',
  component: ScaleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', 
                  options: ['inc', 'dec'],
                  defaultValue: 'inc' },
  },
} satisfies Meta<typeof ScaleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IncButton: Story = {
  args: {
    type: 'inc',
  },
};

export const DecButton: Story = {
  args: {
    type: 'dec',
  },
};

