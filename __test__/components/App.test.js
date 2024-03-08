import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';
import { useRouter } from "next/navigation";

describe('default settings', () => {
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    route: "/",
    usePathname: jest.fn(),
    useSearchParams: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(() => null),
  }),
}));
  test('loads and displays initially zeroes for the scores', async () => {
    // ARRANGE
    renderWithProviders(<App />);
  
    // ACT
    const zeroes = await screen.findAllByText(/0/i);
    
    // ASSERT
    expect(zeroes).toHaveLength(4);
  });
});