"use client";

import React from 'react';

import {store} from '@/store';
import { Provider } from 'react-redux';

import App from '@/components/App';

function StateProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default StateProvider