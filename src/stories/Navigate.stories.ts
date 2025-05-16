import type { Meta, StoryObj } from '@storybook/react';

import { Navigate } from '../components/Navigate/Navigate';

const meta = {
  title: 'Map/Components/NavigateComponents/Navigate',
  component: Navigate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Navigate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigateComponent: Story = {
  args: {
  },
};