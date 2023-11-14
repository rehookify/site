'use client';

import { DatePickerStateProvider } from '@rehookify/datepicker';
import { useEffect, useState } from 'react';

import { DatePicker } from './date-picker';
import { DatePickerFallback } from './date-picker-fallback';

export const DatePickerContent = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [render, setRender] = useState<'pending' | 'loaded'>('pending');

  useEffect(() => {
    setTimeout(() => setRender('loaded'), 250);
  }, []);

  if (render === 'pending') return <DatePickerFallback />;

  return (
    <DatePickerStateProvider
      config={{
        selectedDates,
        onDatesChange,
        dates: { mode: 'range' },
      }}
    >
      <DatePicker />
    </DatePickerStateProvider>
  );
};
