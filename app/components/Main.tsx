import React from 'react';
import styles from './Main.module.css';
import Settings from '@/app/components/Settings';
import ScoreBoard from './ScoreBoard';
import LanguageBoard from './LanguageBoard';
import AnswerInput from './AnswerInput';
import { Box, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Main() {
  return (
    <main className={styles.main}>
      <h1>Vocabulary Trainer</h1>
      <Settings />
      <ScoreBoard />
      <LanguageBoard mode="englishToGerman" flag="us" />
      <LanguageBoard mode="englishToGerman" flag="germany" />
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
          Correct Answer<CheckCircleIcon
            fontSize="large"
            color="success"
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<SendIcon />}
          sx={{ 
            backgroundColor: "var(--secondary-light)",
          }}
        >
          Submit
        </Button>
      </Box>
    </main>
  )
}

export default Main