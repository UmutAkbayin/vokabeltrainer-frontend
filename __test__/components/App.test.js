import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';

describe('default settings', () => {
  test('loads and displays initially zeroes for the scores', async () => {
    // ARRANGE
    renderWithProviders(<App />);
  
    // ACT
    const zeroes = await screen.findAllByText(/0/i);
    
    // ASSERT
    expect(zeroes).toHaveLength(4);
  });
});