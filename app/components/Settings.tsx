"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks/reduxHooks';
import { setAmount } from '@/app/features/amount/amountSlice';
import { setDirection } from '@/app/features/direction/directionSlice';
import type { Direction } from '@/app/features/direction/directionSlice';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
} from '@mui/material';

export default function Settings() {
  const amount = useAppSelector((state) => state.amount.value);
  const direction = useAppSelector((state) => state.direction.value);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    }}>
      <FormControl>
        <InputLabel size="small" id="direction-select-label">Direction</InputLabel>
        <Select
          labelId="direction-select-label"
          id="direction-select"
          value={direction}
          onChange={(e) => dispatch(setDirection(e.target.value as Direction))}
          label="Direction"
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