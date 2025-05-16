import type { Meta, StoryObj } from '@storybook/react';

import { Scale } from '../components/ScaleComponents/Scale/Scale';

const meta = {
  title: 'Map/Components/ScaleComponents/Scale',
  component: Scale,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScaleComponent: Story = {
  args: {
  },
};