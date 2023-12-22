"use client";

import React from 'react';
import { useAppSelector } from "@/app/hooks/reduxHooks"; 

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import germanyFlag from '../../public/germany.png';
import usFlag from '../../public/united-states.png';

interface LanguageBoardProps {
  mode: string;
  flag: string;
}

function LanguageBoard({ mode, flag }: LanguageBoardProps) {
  const status = useAppSelector((state) => state.status.value);

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
        {status === "off" && null}
      </Typography>
    </Box>
  )
}

export default LanguageBoard;