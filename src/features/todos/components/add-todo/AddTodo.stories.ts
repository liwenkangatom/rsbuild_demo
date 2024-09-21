import type { Meta, StoryObj } from '@storybook/react';

import { AddTodo } from './AddTodo';

const meta = {
  title: 'Features/Todos/AddTodo',
  component: AddTodo,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof AddTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
