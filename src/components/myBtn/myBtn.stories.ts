import type { Meta, StoryObj } from '@storybook/react';

import { myBtn } from './myBtn';

const meta: Meta<typeof myBtn> = {
  component: myBtn,
};

export default meta;
type Story = StoryObj<typeof myBtn>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
