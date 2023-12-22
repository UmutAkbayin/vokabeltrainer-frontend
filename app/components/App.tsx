"use client";

import React from 'react';
import {store} from '@/app/store';
import { Provider } from 'react-redux';

import styles from './Main.module.css';

import Settings from '@/app/components/Settings';
import ScoreBoard from './ScoreBoard';
import LanguageBoard from './LanguageBoard';
import AnswerInput from './AnswerInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ButtonsComponent from './ButtonsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <main className={styles.main}>
      <h1>Vocabulary Trainer</h1>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Settings />
          <ScoreBoard />
          <LanguageBoard mode="englishToGerman" flag="us" />
          <LanguageBoard mode="englishToGerman" flag="germany" />
          <AnswerInput />
         <ButtonsComponent />
          </QueryClientProvider>
        </Provider>
    </main>
  )
}

export default App;