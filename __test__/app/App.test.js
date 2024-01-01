import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';


test("loads and displays initially", async () => {
  // ARRANGE
  renderWithProviders(<App />)

  // ACT
  const zeroes = await screen.findAllByText(/0/i);
  
  expect(zeroes).toHaveLength(4);
})