"use client";

import React from 'react';

import {store} from '@/app/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '@/app/components/App';

const queryClient = new QueryClient();

function StateProvider() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  )
}

export default StateProvider