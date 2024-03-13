"use client";

import React from 'react';
import { useAppSelector } from "@/hooks/reduxHooks"; 
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import germanyFlag from '@/public/germany.png';
import usFlag from '@/public/united-states.png';

interface LanguageBoardProps {
  role: string;
}

function LanguageBoard({ role }: LanguageBoardProps) {
  const direction = useAppSelector((state) => state.direction.value);
  const mode = useAppSelector((state) => state.mode.value);
  const currentVocabulary = useAppSelector((state) => state.vocabulary.value);

  const isUSA = role === "input" && direction === "englishToGerman";

  return (
    <Box sx={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
    }}>
      {
        direction === "" ? null : (
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
        {role === 'input' && currentVocabulary?.englishVocabulary}
        {role === 'output' && mode === 'solution'
          && currentVocabulary?.germanVocabularies?.join(', ')}
      </Typography>
    </Box>
  )
}

export default LanguageBoard;