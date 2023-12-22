"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks/reduxHooks';
import { setAmount } from '@/app/features/amount/amountSlice';
import { setMode } from '@/app/features/mode/modeSlice';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
} from '@mui/material';

export default function Settings() {
  const amount = useAppSelector(state => state.amount.value);
  const mode = useAppSelector(state => state.mode.value);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    }}>
      <FormControl>
        <InputLabel size="small" id="mode-select-label">Mode</InputLabel>
        <Select
          labelId="mode-select-label"
          id="mode-select"
          value={mode}
          onChange={(e) => dispatch(setMode(e.target.value))}
          label="Mode"
          sx={{ width: "295px", }}
          size="small"
        >
          <MenuItem value="englishToGerman">English To German</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        size="small"
        value={amount}
        onChange={(e) => dispatch(setAmount(parseInt(e.target.value)))}
        sx={{ width: "120px" }}
      />
    </Box>
  );
}