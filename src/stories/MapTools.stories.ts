import type { Meta, StoryObj } from '@storybook/react';

import { MapTools } from '../containers/MapTools/MapTools';

const meta = {
  title: 'Map/Containers/MapTools',
  component: MapTools,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MapTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MapToolsContainer: Story = {
  args: {
  },
};