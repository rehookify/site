import { FallbackBlock } from '@/components';

export const DatePickerFallback = () => (
  <div className="grid grid-cols-1 gap-y-2 w-[280px]">
    <div className="grid grid-cols-header h-10 gap-x-2">
      <FallbackBlock />
      <FallbackBlock />
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
    <div className="h-10">
      <FallbackBlock />
    </div>
  </div>
);
