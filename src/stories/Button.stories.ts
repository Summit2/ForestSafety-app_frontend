import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';

const meta = {
  title: 'Map/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: 'select', 
                  options: ['blue', 'white', 'accent'],
                  defaultValue: 'blue' },
    buttonSize: { control: 'select', 
                  options: ['middle', 'small'],
                  defaultValue: 'middle' },
    buttonLine: { control: 'select', 
                  options: ['auto', 'line'],
                  defaultValue: 'blue' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    buttonType: 'blue',
  },
};

export const SmallBlue: Story = {
  args: {
    buttonType: 'blue',
    buttonSize: 'small',
  },
};

export const LineBlue: Story = {
  args: {
    buttonType: 'blue',
    buttonLine: 'line',
  },
};

export const White: Story = {
  args: {
    buttonType: 'white',
  },
};

export const SmallWhite: Story = {
  args: {
    buttonType: 'white',
    buttonSize: 'small',
  },
};

export const LineWhite: Story = {
  args: {
    buttonType: 'white',
    buttonLine: 'line',
  },
};

export const Accent: Story = {
  args: {
    buttonType: 'accent',
  },
};

export const SmallAccent: Story = {
  args: {
    buttonType: 'accent',
    buttonSize: 'small',
  },
};

export const LineAccent: Story = {
  args: {
    buttonType: 'accent',
    buttonLine: 'line',
  },
};