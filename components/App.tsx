'use client';

import React from 'react';

import styles from '@/styles/App.module.css';

import Settings from '@/components/Settings';
import ScoreBoard from './ScoreBoard';
import LanguageBoard from './LanguageBoard';
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks"; 
import { fetchVocabularies } from '@/services/fetchVocabularies';
import { setStatus } from '@/features/status/statusSlice';
import { setAmount } from '@/features/amount/amountSlice';
import { setMode } from '@/features/mode/modeSlice';
import { setAnswer } from '@/features/answer/answerSlice';
import { incrementCount, resetCount } from '@/features/count/countSlice';
import { incrementVocabulary, resetVocabulary, setVocabularies }
  from '@/features/vocabularies/vocabulariesSlice';
import { setVocabulary } from '@/features/vocabulary/vocabularySlice';
import { setDirection } from '@/features/direction/directionSlice';
import { Box, Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from 'next/navigation';


function App() {

  const status = useAppSelector((state) => state.status.value);
  const mode = useAppSelector((state) => state.mode.value);
  const count = useAppSelector((state) => state.count.value);
  const amount = useAppSelector((state) => state.amount.value);
  const vocabularies = useAppSelector((state) => state.vocabularies.value);
  const currentVocabulary = useAppSelector((state) => state.vocabulary.value);
  const answer = useAppSelector((state) => state.answer.value);

  const router = useRouter();

  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    if (status === 'on') {
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
    dispatch(setStatus('on'));
  }

  const assert = () => currentVocabulary?.germanVocabularies.includes(answer) ?
    true : false;

  const handleAssertion = () => {
    if (assert()) {
      dispatch(incrementVocabulary(currentVocabulary?.id));
    } else {
      dispatch(resetVocabulary(currentVocabulary?.id));
    }
    dispatch(setMode('solution'));
    dispatch(incrementCount());
  }

  const handleNext = (vocs = vocabularies) => {
    const unfinishedVocabularies = vocs.filter((voc) => voc.step < 3);
    if (unfinishedVocabularies.length === 0) {
      handleReset();
      router.push(`/result/(..)statistics/?amount=${amount}&count=${count}`);
      return;
    } 
    const random = Math.trunc(Math.random() * unfinishedVocabularies.length);
    dispatch(setVocabulary(unfinishedVocabularies[random]));
    dispatch(setAnswer(''));
    dispatch(setMode('question'));
  }

  const handleReset = () => {
    dispatch(setStatus('off'));
    dispatch(setMode(''));
    dispatch(setDirection(''));
    dispatch(setAmount('1'));
    dispatch(setAnswer(''));
    dispatch(setVocabularies([]));
    dispatch(resetCount());
    dispatch(setVocabulary({
    id: '',
    englishVocabulary: '',
    germanVocabularies: [],
    step: 0,
  },));
  }
  return (
    <main className={styles.main}>
      <h1>Vocabulary Trainer</h1>
      <Settings />
      <ScoreBoard />
      <LanguageBoard role='input' />
      <LanguageBoard role='output' />
      <TextField
        fullWidth
        placeholder='Your Answer'
        value={answer}
        onChange={(e) => dispatch(setAnswer(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            mode === 'solution' ? handleNext() : handleAssertion();
          }
        }}
        disabled={status === 'off'}
      />
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}>
        <Button
          className='btn-secondary'
          variant='contained'
          size='large'
          startIcon={<RestartAltIcon />}
          sx={{
            backgroundColor: "var(--light-gray)",
            color: "var(--primary-color)",
            "&:hover": {
              color: "white",
            }
          }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Box sx={{ 
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "1.3rem",
  }}>
      {status === 'off' && null}
          {mode === 'solution' && assert() &&
            <>
              <CheckCircleIcon
                fontSize="large"
                color="success"
              />Correct Answer
            </>
          }
          {mode === 'solution' && !assert() && 
            <>
              <CancelIcon fontSize='large' color='error' />Wrong Answer
            </>
      }
          
        </Box>
          <Button
            variant='contained'
            size='large'
            startIcon={<SendIcon />}
          onClick={() => {
            status === 'off' ? handleFetch() : mode === 'solution' ?
              handleNext() : handleAssertion();
            }}
          >
            {status === 'off' ? 'Start' : 'Submit'}
        </Button>
      </Box>
    </main>
  )
}

export default App;