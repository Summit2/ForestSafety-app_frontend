import type { Meta, StoryObj } from '@storybook/react';

import { Line } from '../components/Line/Line';

const meta = {
  title: 'Map/Components/Line',
  component: Line,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineComponent: Story = {
  args: {
  },
};

