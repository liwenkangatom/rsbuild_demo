import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TodoList } from './TodoList';

const meta = {
  title: 'Features/Todos/TodoList',
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};