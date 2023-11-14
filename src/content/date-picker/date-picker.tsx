'use client';

import {
  useContextCalendars,
  useContextDatePickerOffsetPropGetters,
} from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Calendar } from '~/components/date-picker/calendar';
import { DatePickerButton } from '~/components/date-picker/date-picker-button';

export const DatePicker = () => {
  const { calendars } = useContextCalendars();
  const { addOffset, subtractOffset } = useContextDatePickerOffsetPropGetters();

  return (
    <Calendar
      calendar={calendars[0]}
      prevButton={
        <DatePickerButton {...subtractOffset({ months: 1 })}>
          <ChevronLeft />
        </DatePickerButton>
      }
      nextButton={
        <DatePickerButton {...addOffset({ months: 1 })}>
          <ChevronRight />
        </DatePickerButton>
      }
    />
  );
};
