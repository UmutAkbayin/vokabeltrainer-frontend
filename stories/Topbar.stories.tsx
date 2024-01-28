import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { setupStore } from '@/store';
import { Provider } from 'react-redux';

import Topbar from '@/components/Topbar';

const meta: Meta<typeof Topbar> = {
  component: Topbar,
};

export default meta;
type Story = StoryObj<typeof Topbar>;

export const NotSignedIn = {
  args: {}
}