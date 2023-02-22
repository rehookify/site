import {
  useContextCalendars,
  useContextMonthsPropGetters,
} from '@rehookify/datepicker';
import { Calendar, DatePickerButton } from '@/components/DatePicker';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';

const DatePicker = () => {
  const { calendars } = useContextCalendars();
  const { previousMonthButton, nextMonthButton } =
    useContextMonthsPropGetters();

  return (
    <Calendar
      calendar={calendars[0]}
      prevButton={
        <DatePickerButton {...previousMonthButton()}>
          <ChevronLeftIcon />
        </DatePickerButton>
      }
      nextButton={
        <DatePickerButton {...nextMonthButton()}>
          <ChevronRightIcon />
        </DatePickerButton>
      }
    />
  );
};

export default DatePicker;