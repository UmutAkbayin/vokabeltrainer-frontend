'use client';

import React from 'react';
import {useAppSelector} from '@/hooks/reduxHooks';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import germanyFlag from '@/public/germany.png';
import usFlag from '@/public/united-states.png';

interface LanguageBoardProps {
  flag: string;
}

function LanguageBoard({flag}: LanguageBoardProps) {
  const direction = useAppSelector((state) => state.direction.value);
  const mode = useAppSelector((state) => state.mode.value);
  const currentVocabulary = useAppSelector((state) => state.vocabulary.value);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {direction === '' ? null : (
        <Image
          src={flag === 'usa' ? usFlag : germanyFlag}
          width={75}
          height={75}
          alt={flag === 'usa' ? 'USA flag' : 'Germany flag'}
        />
      )}
      <Typography
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingRight: '100px',
        }}
      >
        {flag === 'usa' && currentVocabulary?.englishVocabulary}
        {flag === 'germany' &&
          mode === 'solution' &&
          currentVocabulary?.germanVocabularies?.join(', ')}
      </Typography>
    </Box>
  );
}

export default LanguageBoard;
