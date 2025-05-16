import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components/Text/Text";

const meta = {
    title: 'Map/Components/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select',
                options: ['h1', 'h2', 'h3', 'text', 'bold-text', 'text-link', 'text-help-link', 'small-text'],
                defaultValue: 'text', },
        color: { control: 'select', 
                options: ['base', 'gray', 'other', 'header', 'link'],
                defaultValue: 'base'},
        children: { control: 'text', defaultValue: 'Текст', }
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
      type: 'h1',
      children: 'Текст',
      tag: 'span',
      color: 'base',
    },
};

export const H2: Story = {
    args: {
      type: 'h2',
      children: 'Текст',
      tag: 'span',
      color: 'base',
    },
};

export const H3: Story = {
    args: {
      type: 'h3',
      children: 'Текст',
      tag: 'span',
      color: 'base',
    },
};

export const text: Story = {
    args: {
      type: 'text',
      children: 'Текст',
      tag: 'span',
      color: 'base',
    },
};

export const BoldText: Story = {
    args: {
      type: 'bold-text',
      children: 'Текст',
      tag: 'span',
      color: 'base',
    },
};

export const TextLink: Story = {
    args: {
      type: 'text-link',
      children: 'Текст',
      tag: 'span',
    },
};

export const TextHelpLink: Story = {
  args: {
    type: 'text-help-link',
    children: 'Текст',
    tag: 'span',
  },
};