import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/components/App';
import {renderWithProviders} from '@/utils/test-utils';

describe('default settings', () => {
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

  test('loads initially with start button', async () => {
    renderWithProviders(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    expect(startButton).toBeInTheDocument();
  });

  test('changes start button to submit button when mode on', async () => {
    renderWithProviders(<App />, state);

    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(submitButton).toBeInTheDocument();
  });

  test('loads and displays initially zeroes for the scores', async () => {
    renderWithProviders(<App />);

    const zeroes = await screen.findAllByText(/0/i);

    expect(zeroes).toHaveLength(4);
  });

  test('loads and displays initially flags', async () => {
    renderWithProviders(<App />, state);

    const images = await screen.findAllByRole('img');
    const germanFlag = screen.getByRole('img', {
      name: /germany flag/i,
    });
    const usFlag = screen.getByRole('img', {
      name: /usa flag/i,
    });

    expect(images).toHaveLength(2);
    expect(germanFlag).toBeInTheDocument();
    expect(usFlag).toBeInTheDocument();
  });
});
