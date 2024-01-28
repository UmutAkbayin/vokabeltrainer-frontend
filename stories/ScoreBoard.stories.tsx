import type { Meta, StoryObj } from '@storybook/react';
import { setupStore } from '@/store';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';

import ScoreBoard from '@/components/ScoreBoard';

const meta: Meta<typeof ScoreBoard> = {
  component: ScoreBoard,
};

export default meta;
type Story = StoryObj<typeof ScoreBoard>;

export const Default: Story = {
  decorators: [(story) => <Provider store={setupStore()}>{story()}</Provider>]
};

const mockStore = configureMockStore();
const initialState = {
    status: {
      value: 'on',
    },
    vocabularies: {
      value: [
        {
    "id": "78c21ee0-544b-4ae1-b616-3d2f2009d177",
    "englishVocabulary": "ensconced",
    "germanVocabularies": [
      "versteckt"
    ],
    "step": 0
  },
  {
    "id": "f36def0c-6e20-44e6-ab8b-38ba22306c61",
    "englishVocabulary": "to forgo sth.",
    "germanVocabularies": [
      "etwas aufgeben",
      "auf etwas verzichten"
    ],
    "step": 0
  },
      ],
    }
};
  
const newStore = mockStore(initialState);

export const StartedGame: Story = {
  decorators: [(story) => <Provider store={newStore}>{story()}</Provider>]
};