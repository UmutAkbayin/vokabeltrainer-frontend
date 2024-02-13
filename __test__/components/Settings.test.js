import { screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import {renderWithProviders} from '@/utils/test-utils';
import Settings from '@/components/Settings';
import { setDirection } from '@/features/direction/directionSlice';
import { setAmount } from '@/features/amount/amountSlice';

test('it renders initially with amount 1', async () => { 
  renderWithProviders(<Settings />);
  
  const input = screen.getByLabelText(/amount/i);

  expect(input.value).toBe('1');
});

test('it renders initially without direction', async () => { 
  renderWithProviders(<Settings />);

  const select = screen.getByLabelText(/direction/i);

  expect(select.value).toBeUndefined();
});

test('it can change amount', async () => { 
  const {store} = renderWithProviders(<Settings />);

  const input = screen.getByLabelText(/amount/i);

  act(() => store.dispatch(setAmount('7')));

  expect(input.value).toBe('7');
});

test('it can change direction', async () => { 
  const { store } = renderWithProviders(<Settings />);

  const select = await screen.findByLabelText(/direction/i);

  act(() => store.dispatch(setDirection("englishToGerman")));

  expect(select.textContent).toEqual('English To German');
});