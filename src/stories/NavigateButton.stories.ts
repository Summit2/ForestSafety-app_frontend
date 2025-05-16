import type { Meta, StoryObj } from '@storybook/react';

import { NavigateButton } from '../components/Navigate/NavigateButton/NavigateButton';

const meta = {
  title: 'Map/Components/NavigateComponents/NavigateButton',
  component: NavigateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', 
                  options: ['top', 'bottom', 'left', 'right'],
                  defaultValue: 'top' },
  },
} satisfies Meta<typeof NavigateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    type: 'top',
  },
};

export const Bottom: Story = {
    args: {
      type: 'bottom',
    },
};

export const Left: Story = {
    args: {
      type: 'left',
    },
};

export const Right: Story = {
    args: {
      type: 'right',
    },
};