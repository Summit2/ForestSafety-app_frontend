import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/Input/Input';

const meta = {
  title: 'Map/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: { control: 'select', 
                  options: ['base', 'search', 'password'],
                  defaultValue: 'blue' },
    placeholder: { control: 'text', defaultValue: 'Введите текст' },
    value: { control: 'text', defaultValue: '' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    inputType: 'base',
    placeholder: 'Введите текст',
  },
};

export const Search: Story = {
    args: {
      inputType: 'search',
      placeholder: 'Введите текст',
    },
};

export const Password: Story = {
    args: {
      inputType: 'password',
      placeholder: 'Введите пароль',
    },
};
