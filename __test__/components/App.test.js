import {findAllByRole, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '@/components/App';
import {renderWithProviders} from '@/utils/test-utils';

describe('default settings', () => {
  test('loads and displays initially zeroes for the scores', async () => {
    renderWithProviders(<App />);

    const zeroes = await screen.findAllByText(/0/i);

    expect(zeroes).toHaveLength(4);
  });

  test('loads and displays initially zeroes for the scores', async () => {
    const state = {
      preloadedState: {
        amount: 1,
        mode: 'question',
        status: 'on',
        vocabularies: [
          {
            id: '1',
            englishVocabulary: 'venture',
            germanVocabularies: [
              'Projekt',
              'Unternehmen',
              'Wagnis',
              'Risiko',
              'Spekulation',
            ],
            step: 0,
          },
        ],
        vocabulary: {
          id: '1',
          englishVocabulary: 'venture',
          germanVocabularies: [
            'Projekt',
            'Unternehmen',
            'Wagnis',
            'Risiko',
            'Spekulation',
          ],
          step: 0,
        },
        direction: 'englishToGerman',
        answer: '',
        amount: '1',
      },
    };
    renderWithProviders(<App />, state);

    const images = await findAllByRole('img');
  });
});
