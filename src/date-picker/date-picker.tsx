import React, { useState, useEffect } from 'react';
import {
  useDatePickerState,
  useCalendars,
  useDaysPropGetters,
  useMonthsPropGetters,
  CalendarDay,
} from '@rehookify/datepicker';
import { DatePickerButton } from './date-picker-button';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

import '../styles/date-picker.css';

export const getDayClassName = ({
  isToday,
  selected,
  inCurrentMonth,
  range,
}: CalendarDay) =>
  [
    'day',
    range,
    selected ? 'selected' : null,
    isToday ? 'today' : null,
    !inCurrentMonth ? 'secondary' : null,
  ]
    .filter(Boolean)
    .join(' ');

export const DatePicker = () => {
  const [calendarsData, setCalendarsData] = useState<ReturnType<
    typeof useCalendars
  > | null>(null);
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const s = useDatePickerState({
    selectedDates,
    onDatesChange,
    dates: {
      mode: 'range',
    },
  });

  const { dayButton } = useDaysPropGetters(s);
  const { nextMonthButton, previousMonthButton } = useMonthsPropGetters(s);
  useEffect(() => {
    setCalendarsData(useCalendars(s));
  }, [s]);

  if (!calendarsData) return null;
  const { calendars, weekDays } = calendarsData;

  const { month, year, days } = calendars[0];

  return (
    <section className="date-picker">
      <header className="date-picker__header">
        <DatePickerButton
          {...previousMonthButton()}
          aria-label="previous month button"
        >
          <ChevronLeftIcon />
        </DatePickerButton>
        <p>
          {month} {year}
        </p>
        <DatePickerButton {...nextMonthButton()} aria-label="next month button">
          <ChevronRightIcon />
        </DatePickerButton>
      </header>
      <div className="date-picker__weekdays">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="date-picker__calendar">
        {days.map((dpDay) => (
          <DatePickerButton
            key={dpDay.date}
            className={getDayClassName(dpDay)}
            {...dayButton(dpDay)}
          >
            {dpDay.day}
          </DatePickerButton>
        ))}
      </div>
    </section>
  );
};
