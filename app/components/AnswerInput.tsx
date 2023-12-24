"use client";

import React from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks"; 

import { TextField } from '@mui/material';
import { setAnswer } from '../features/answer/answerSlice';

function AnswerInput() {
  const answer = useAppSelector((state) => state.answer.value);

  const dispatch = useAppDispatch();

  return (
    <>
      <TextField
        fullWidth
        placeholder='Your Answer'
        value={answer}
        onChange={(e) => dispatch(setAnswer(e.target.value))}
      />
    </>
  )
}

export default AnswerInput;