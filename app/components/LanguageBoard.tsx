"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import germanyFlag from '../../public/germany.png';
import usFlag from '../../public/united-states.png';

interface LanguageBoardProps {
  mode: string;
  flag: string;
}

function LanguageBoard({ mode, flag } : LanguageBoardProps) {
  return (
    <Box sx={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
    }}>
      <Image
        src={flag === "germany" ? germanyFlag : usFlag}
        width={75}
        height={75}
        alt="Germany flag"
      />
      <Typography sx={{
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: "100px",
      }}>
        Some text
      </Typography>
    </Box>
  )
}

export default LanguageBoard;