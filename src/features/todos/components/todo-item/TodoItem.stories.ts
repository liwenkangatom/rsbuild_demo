import type { Meta, StoryObj } from '@storybook/react';

import { TodoItem } from './TodoItem';

const meta = {
  title: 'Features/Todos/TodoItem',
  component: TodoItem,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
