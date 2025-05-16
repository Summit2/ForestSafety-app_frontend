import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components/Label/Label';

const meta = {
  title: 'Map/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    shadow: { control: 'boolean' },
    labelColor: { control: 'select',
                  options: ['blue', 'accent', 'fill-blue', 'auto'],
                  defaultValue: 'auto', }
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelComponent: Story = {
  args: {
    name: 'Object name',
  },
};

export const Shadow: Story = {
  args: {
    name: 'Object name',
    shadow: true,
  },
};

export const Blue: Story = {
  args: {
    name: 'Object name',
    labelColor: 'blue',
  },
};

export const Accent: Story = {
  args: {
    name: 'Object name',
    labelColor: 'accent',
  },
};

export const FillBlue: Story = {
  args: {
    name: 'Object name',
    labelColor: 'fill-blue',
  },
};

