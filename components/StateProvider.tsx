'use client';

import React from 'react';

import {setupStore} from '@/store';
import {Provider} from 'react-redux';

import App from '@/components/App';

function StateProvider() {
  return (
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
}

export default StateProvider;
