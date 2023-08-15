import { Test } from './Test';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/Test',
  component: Test,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'test',
  },
};
