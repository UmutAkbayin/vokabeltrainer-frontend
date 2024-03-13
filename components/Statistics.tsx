'use client';

import React from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import {useRouter} from 'next/navigation';
import Button from '@mui/material/Button';

export default function Statistics() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const amount = params.get('amount') as string;
  const count = params.get('count') as string;
  const result = ((parseInt(amount) * 3) / parseInt(count)) * 100;
  return (
    <>
      <div>Your Score: {result}%</div>
      {pathname.includes('(..)') && (
        <Button onClick={() => router.back()}>Close modal</Button>
      )}
    </>
  );
}
