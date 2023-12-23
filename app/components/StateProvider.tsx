"use client";

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from '@/app/components/App';

const queryClient = new QueryClient();

function StateProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default StateProvider