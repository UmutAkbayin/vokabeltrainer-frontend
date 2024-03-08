import { screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import {renderWithProviders} from '@/utils/test-utils';
import Settings from '@/components/Settings';
import { setDirection } from '@/features/direction/directionSlice';
import { setAmount } from '@/features/amount/amountSlice';

test('renders initially with amount 1', async () => { 
  renderWithProviders(<Settings />);
  
  const input = screen.getByRole('spinbutton');

  expect(input.value).toBe('1');
});

test('renders initially without direction', async () => { 
  renderWithProviders(<Settings />);

  const select = screen.getByRole('combobox', {
    name: 'Direction',
  });

  expect(select.value).toBeUndefined();
});

test('can change amount', async () => { 
  const {store} = renderWithProviders(<Settings />);

  const input = screen.getByRole('spinbutton');

  await userEvent.clear(input);
  await userEvent.type(input, '7');

  expect(input.value).toBe('7');
});

test('can change direction', async () => { 

  const { store } = renderWithProviders(<Settings />);

  const options = screen.getAllByRole('option');
  //expect(screen.getByRole('option', { name: 'English To German' }).selected).toBe(true);
});