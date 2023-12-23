"use client";

import React from 'react';


import styles from '@/app/styles/App.module.css';

import Settings from '@/app/components/Settings';
import ScoreBoard from './ScoreBoard';
import LanguageBoard from './LanguageBoard';
import AnswerInput from './AnswerInput';
import { useQuery } from '@tanstack/react-query';
import { fetchVocabularies } from '@/app/services/fetchVocabularies';

import { Box, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function App() {

  const status = useAppSelector((state) => state.status.value);
  const mode = useAppSelector((state) => state.mode.value);
  const vocabularies = useAppSelector((state) => state.vocabularies.value);
  const dispatch = useAppDispatch();

  const query =
    useQuery({
      queryKey: ['vocabularies'],
      queryFn: () => fetchVocabularies(7),
      enabled: false,
    });

  const handleFetch = () => {
    if (mode !== "") {
       query.refetch();
       dispatch(setStatus("on"));
       dispatch(setVocabularies(query.data));
    } else {
      console.log("choose a mode please")
    }
  }

  const handleAssertion = () => {

  }

  const handleNext = () => {

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
    { status === "off" && null}
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
          onClick={handleFetch}
        >
          {status === "off" ? "Start" : "Submit"}
        </Button>
        </Box>
    </main>
  )
}

export default App;