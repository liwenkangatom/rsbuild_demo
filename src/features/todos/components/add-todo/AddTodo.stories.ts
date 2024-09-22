import type { Meta, StoryObj } from '@storybook/react';

import { AddTodo } from './AddTodo';
import { fn } from '@storybook/test';
import { delay } from 'msw';

const meta = {
  title: 'Features/Todos/AddTodo',
  component: AddTodo,
  parameters: {
    layout: 'centered',
  },
  args: {
    onAddTodo: fn(async () => {
      await delay(1000)
    }),
  },
} satisfies Meta<typeof AddTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
