import type { Meta, StoryObj } from '@storybook/react';

import { TodoItem } from './TodoItem';
import { fn } from '@storybook/test';
import { delay } from 'msw';

const meta = {
  title: 'Features/Todos/TodoItem',
  component: TodoItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'add this todo to test',
    onDelete: fn(async () => {
      await delay(1000);
    }),
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
