import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import {
  Calendar as CalendarType,
  CalendarDay,
  useContextCalendars,
  useContextDaysPropGetters,
} from '@rehookify/datepicker';

import { DatePickerButton } from './date-picker-button';
import { Section } from './section';
import { SectionHeader } from './section-header';

import styles from './calendar.module.css';

interface CalendarProps {
  prevButton?: ReactNode;
  nextButton?: ReactNode;
  calendar: CalendarType;
}

const getDayClassName = (
  className: string,
  { selected, disabled, inCurrentMonth, now, range }: CalendarDay,
) =>
  clsx('day', className, {
    'bg-zinc-800 text-white hover:bg-zinc-800 !opacity-100': selected,
    'opacity-25 cursor-not-allowed': disabled,
    'opacity-60': !inCurrentMonth,
    'border border-zinc-800': now,
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
    <Section>
      <SectionHeader>
        {prevButton || <div />}
        <p className="text-center text-sm">{month}</p>
        {nextButton || <div />}
      </SectionHeader>
      <div className="grid grid-cols-7 gap-y-2 mb-2 items-center h-10">
        {weekDays.map((d) => (
          <p className="text-xs text-center" key={d}>
            {d}
          </p>
        ))}
      </div>
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
    </Section>
  );
};
