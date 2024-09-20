import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PetItem } from './PetItem';

const meta = {
  title: 'Pet/Components/PetItem',
  component: PetItem,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof PetItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // init args
  },
};
