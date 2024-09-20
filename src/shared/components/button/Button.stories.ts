import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Shared/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onAdd: fn(),
    onReduce: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
