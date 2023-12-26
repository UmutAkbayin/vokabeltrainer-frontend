'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

function Statistics() {
  const params = useSearchParams();
  const amount = params.get('amount') as string;
  const count = params.get('count') as string;
  const result = parseInt(amount) * 3 / parseInt(count) * 100;
  return (
    <div>Your Score: { result }%</div>
  )
}

export default Statistics