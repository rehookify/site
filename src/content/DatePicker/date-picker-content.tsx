import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { DatePickerStateProvider } from '@rehookify/datepicker';
import { ButtonIcon, PrimaryButton } from '@/components';
import { DP_FEATURES } from '@/constants';
import { DatePickerLogo, ExternalLinkIcon } from '@/icons';

import styles from './dp-content.module.css';
import { DatePickerFallback } from './date-picker-fallback';
import DatePicker from './date-picker';

export const DatePickerContent = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [render, setRender] = useState<'pending' | 'loaded'>('pending');

  useEffect(() => {
    setTimeout(() => setRender('loaded'), 250);
  }, []);

  return (
    <>
      <div className="flex justify-center mb-12 max-h-48">
        <DatePickerLogo />
      </div>
      <div className={styles.dp}>
        <h2
          className={clsx(
            styles.title,
            'text-2xl md:text-2.5 leading-normal font-bold sm:max-[900px]:text-center',
          )}
        >
          Set of React hooks that will help you to build a date, range and time
          picker in your apps.
        </h2>
        <div
          className={clsx(
            styles.features,
            'justify-self-start md:justify-self-center md-8 md:mb-0',
          )}
        >
          <p className="text-2xl md:text-2.5 leading-normal font-bold mb-4">
            Main features:
          </p>
          <ul className="text-zinc-500 mb-8 list-disc pl-4">
            {DP_FEATURES.map((feature) => (
              <li key={feature.replace(' ', '-')} className="mb-2 text-xl">
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/rehookify/datepicker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton>
              Documentation{' '}
              <ButtonIcon className="ml-2">
                <ExternalLinkIcon />
              </ButtonIcon>
            </PrimaryButton>
          </a>
        </div>
        <div className={styles.calendars}>
          {render === 'pending' ? (
            <DatePickerFallback />
          ) : (
            <DatePickerStateProvider
              config={{
                selectedDates,
                onDatesChange,
                dates: { mode: 'range' },
              }}
            >
              <DatePicker />
            </DatePickerStateProvider>
          )}
        </div>
      </div>
    </>
  );
};
