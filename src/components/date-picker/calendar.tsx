import {
  type DPCalendar,
  type DPDay,
  useContextCalendars,
  useContextDaysPropGetters,
} from '@rehookify/datepicker';
import { FC, ReactNode } from 'react';

import { cn } from '~/lib/cn';
import styles from '~/styles/calendar.module.css';

import { DatePickerButton } from './date-picker-button';

interface CalendarProps {
  prevButton?: ReactNode;
  nextButton?: ReactNode;
  calendar: DPCalendar;
}

const getDayClassName = (
  className: string,
  { selected, disabled, inCurrentMonth, now, range }: DPDay,
) =>
  cn('day', className, {
    'bg-zinc-800 text-zinc-100 hover:bg-zinc-800 !opacity-100': selected,
    'dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100': selected,
    'opacity-25 cursor-not-allowed': disabled,
    'opacity-60': !inCurrentMonth,
    'border border-zinc-800 dark:border-zinc-100': now,
    [styles[range]]: range,
  });

export const Calendar: FC<CalendarProps> = ({
  prevButton,
  nextButton,
  calendar,
}) => {
  const { weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { days, month } = calendar;
  return (
    <section>
      <header className="mb-2 grid grid-cols-header items-center">
        {prevButton || <div />}
        <p className="text-center text-sm">{month}</p>
        {nextButton || <div />}
      </header>
      <ul className="mb-2 grid h-10 grid-cols-7 items-center gap-y-2">
        {weekDays.map((d) => (
          <li className="text-center text-xs" key={d}>
            {d}
          </li>
        ))}
      </ul>
      <main className="grid grid-cols-7 gap-y-2">
        {days.map((d) => (
          <DatePickerButton
            key={d.$date.toISOString()}
            className={getDayClassName('w-10 text-xs', d)}
            {...dayButton(d)}
          >
            {d.day}
          </DatePickerButton>
        ))}
      </main>
    </section>
  );
};
