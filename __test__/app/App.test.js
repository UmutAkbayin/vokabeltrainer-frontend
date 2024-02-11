import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/components/App';
import { renderWithProviders } from '@/utils/test-utils';
import {MockStore, mockStore} from 'redux-mock-store' //ES6 modules
import { setDirection } from '@/features/direction/directionSlice';


describe("default settings", () => {
  test("loads and displays initially", async () => {
    // ARRANGE
    renderWithProviders(<App />);
  
    // ACT
    const zeroes = await screen.findAllByText(/0/i);
    
    // ASSERT
    expect(zeroes).toHaveLength(4);
  });

  test("does not load the vocabularies without direction", async () => {
    const { store } = renderWithProviders(<App />);
    act(() => store.dispatch(setDirection("englishToGerman")));
    
    const state = store.getState();
    screen.debug();
  });
});



