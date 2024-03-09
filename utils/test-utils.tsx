import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@/store';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from "next/navigation";
import 'next-router-mock';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))


// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
      ...renderOptions
    }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    const router = useRouter();
    return (
      <AppRouterContext.Provider value={router}>
        <Provider store={store}>
          {children}
        </Provider>
      </AppRouterContext.Provider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}