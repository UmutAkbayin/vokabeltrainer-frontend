"use client";

import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';

export default function Settings() {
  const [mode, setMode] = React.useState<string>("");

  function handleModeChange() {
    return null;
  }
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
          label="Mode"
          onChange={handleModeChange}
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
        sx={{ width: "120px" }}
      />
    </Box>
  );
}