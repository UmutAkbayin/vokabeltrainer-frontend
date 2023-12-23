"use client";

import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import germanyFlag from '../../public/germany.png';
import usFlag from '../../public/united-states.png';

interface LanguageBoardProps {
  role: string;
}

function LanguageBoard({ role }: LanguageBoardProps) {
  const mode: string = "englishToGerman";
  const isUSA = role === "input" && mode === "englishToGerman"

  return (
    <Box sx={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
    }}>
      {
        mode === "" ? null : (
        <Image
          src={isUSA ? usFlag : germanyFlag}
          width={75}
          height={75}
          alt={isUSA ? "USA flag" : "Germany flag"}
        />
        )
      }
      <Typography sx={{
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: "100px",
      }}>
        {}
      </Typography>
    </Box>
  )
}

export default LanguageBoard;