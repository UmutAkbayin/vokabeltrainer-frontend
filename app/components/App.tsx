"use client";

import React from 'react';


import styles from '@/app/styles/App.module.css';

import Settings from '@/app/components/Settings';
import ScoreBoard from './ScoreBoard';
import LanguageBoard from './LanguageBoard';
import AnswerInput from './AnswerInput';
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks"; 
import { fetchVocabularies } from '@/app/services/fetchVocabularies';
import { setStatus } from '@/app/features/status/statusSlice';
import { incrementVocabulary, resetVocabulary, setVocabularies } from '@/app/features/vocabularies/vocabulariesSlice';
import { setMode } from '@/app/features/mode/modeSlice';
import type { Vocabulary } from '@/app/features/vocabularies/vocabulariesSlice';

import { Box, Button, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { setVocabulary } from '../features/vocabulary/vocabularySlice';


function App() {

  const status = useAppSelector((state) => state.status.value);
  const mode = useAppSelector((state) => state.mode.value);
  const direction = useAppSelector((state) => state.direction.value);
  const amount = useAppSelector((state) => state.amount.value);
  const vocabularies = useAppSelector((state) => state.vocabularies.value);
  const currentVocabulary = useAppSelector((state) => state.vocabulary.value);
  const answer = useAppSelector((state) => state.answer.value);


  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    if (status === "on") {
      const getData = async () => {
        const data = await fetchVocabularies(amount);
        dispatch(setVocabularies(data));
        handleNext(data);
      }
      getData();
    } else {
    }
}, [status]);
  
  const handleFetch = () => {
    dispatch(setStatus("on"));
  }

  const handleAssertion = () => {
    if (currentVocabulary.germanVocabularies.includes(answer)) {
      dispatch(incrementVocabulary(currentVocabulary.id));
    } else {
      dispatch(resetVocabulary(currentVocabulary.id));
    }

    if (vocabularies.filter((voc) => voc.step < 3).length > 0) {
      dispatch(setMode('solution'));
    } else {
      console.log("finished");
    }
  }

  const handleNext = (vocs = vocabularies) => {
    const unfinishedVocabularies = vocs.filter((voc) => voc.step < 3);
    const random = Math.trunc(Math.random() * unfinishedVocabularies.length);
    dispatch(setVocabulary(unfinishedVocabularies[random]));
    dispatch(setMode('question'));
  }

  return (
    <main className={styles.main}>
      <h1>Vocabulary Trainer</h1>
      <Settings />
      <ScoreBoard />
      <LanguageBoard role="input" />
      <LanguageBoard role="output" />
      <AnswerInput />
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}>
        <Button
          className='btn-secondary'
          variant="contained"
          size="large"
          startIcon={<RestartAltIcon />}
          sx={{
            backgroundColor: "var(--light-gray)",
            color: "var(--primary-color)",
            "&:hover": {
              color: "white",
            }
          }}
        >
          Reset
        </Button>
        <Box sx={{ 
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "1.3rem",
  }}>
    {status === "off" && null}
    {/* Correct Answer<CheckCircleIcon
    fontSize="large"
    color="success"
    /> */}
        </Box>
          <Button
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            sx={{ 
              backgroundColor: "var(--secondary-light)",
            }}
          onClick={() => {
            status === 'off' ? handleFetch() : mode === 'solution' ?
              handleNext() : handleAssertion();
            }}
          >
            {status === "off" ? "Start" : "Submit"}
        </Button>
        </Box>
    </main>
  )
}

export default App;