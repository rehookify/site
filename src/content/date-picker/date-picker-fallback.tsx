import { Skeleton } from '~/components/skeleton';

export const DatePickerFallback = () => (
  <div className="grid w-[280px] grid-cols-1 gap-y-2">
    <div className="grid h-10 grid-cols-header gap-x-2">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
    <div className="h-10">
      <Skeleton />
    </div>
  </div>
);
