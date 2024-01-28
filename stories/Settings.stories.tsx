import type { Meta, StoryObj } from '@storybook/react';
import {setupStore} from '@/store';
import { Provider } from 'react-redux';


import Settings from '../components/Settings';

const meta: Meta<typeof Settings> = {
  component: Settings,
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const Default: Story = {
  decorators: [(story) => <Provider store={setupStore()}>{story()}</Provider>]
};