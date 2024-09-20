import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from './Header';

const meta = {
  title: 'Shared/Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
