import React from 'react';
import { useDatePickerState, useCalendars, useDaysPropGetters, useMonthsPropGetters, CalendarDay } from "@rehookify/datepicker";
import { DatePickerButton } from './date-picker-button';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

import '../styles/date-picker.css';

const NOW = new Date();

export const getDayClassName = (
  { isToday, selected, inCurrentMonth, range }: CalendarDay,
) =>
  [
    'day',
    range,
    (selected ? 'selected' : null),
    (isToday ? 'today' : null),
    (!inCurrentMonth ? 'secondary' : null)
  ]
    .filter(Boolean)
    .join(' ');

export const DatePicker = () => {
  const [s, d] = useDatePickerState({
    dates: {
      mode: 'range',
      selectedDates: [
        new Date(NOW.setDate(NOW.getDate() - 3)),
        new Date(NOW.setDate(NOW.getDate() + 6)),
      ],
    }
  });
  const { calendars, weekDays } = useCalendars(s);
  const { dayButton } = useDaysPropGetters(s, d);
  const { nextMonthButton, previousMonthButton } = useMonthsPropGetters(s, d);

  const { month, year, days } = calendars[0];

  return (
    <section className="date-picker">
      <header className="date-picker__header">
        <DatePickerButton {...previousMonthButton()}>
          <ChevronLeftIcon />
        </DatePickerButton>
        <p>
          {month} {year}
        </p>
        <DatePickerButton {...nextMonthButton()}>
          <ChevronRightIcon />
        </DatePickerButton>
      </header>
      <div className="date-picker__weekdays">
        {weekDays.map((day) => (<div key={day}>{day}</div>))}
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
  )
}
