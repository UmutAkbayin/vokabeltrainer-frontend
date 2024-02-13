import { act, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';
import { setDirection } from '@/features/direction/directionSlice';

describe('default settings', () => {
  test('it loads and displays initially zeroes', async () => {
    // ARRANGE
    renderWithProviders(<App />);
  
    // ACT
    const zeroes = await screen.findAllByText(/0/i);
    
    // ASSERT
    expect(zeroes).toHaveLength(4);
  });
});

describe('start game', () => { 
  test('it does not fetch data before chosing direction', async () => {
    const getData = jest.fn();
    const { store } = renderWithProviders(<App />);
    const button = await screen.findByRole('button', {
      name: /start/i,
    });
    
    await user.click(button);

    expect(getData).toHaveBeenCalledTimes(0);
    await waitFor(async () => {
      const base = await screen.findByText(/base/i);
      expect(base.nextSibling.textContent).toEqual('0');
    });
  });

/*   test('start game before chosing direction displays error message',
    async () => {
      const {store} = renderWithProviders(<App />);
      const button = await screen.findByRole("button", {
        name: /start/i,
      });
      const base = screen.getByText(/direction is missing/i);

      await user.click(button);

      expect(base).toBeInTheDocument();
    });
   */
  test('it shows data after chosing direction', async () => {
    // ARRANGE
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () =>
        Promise.resolve([
          {
            id: '452518bf-dc8a-4563-9d0a-932495c930cc',
            englishVocabulary: 'to perceive',
            germanVocabularies: ['wahrnehmen', 'bemerken', 'erkennen'],
            step: 0,
          },
        ]),
    });
    const { store } = renderWithProviders(<App />);
    const button = await screen.findByRole('button', {
      name: /start/i,
    });
    const base = screen.getByText(/base/i).nextSibling;

    // ACT
    act(() => store.dispatch(setDirection('englishToGerman')));
    await user.click(button);
    // ASSERT
    await waitFor(async () => {
      expect(base.textContent).toEqual('1');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });
});



