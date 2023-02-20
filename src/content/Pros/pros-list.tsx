import { PROS_ITEMS } from '@/constants';
import { ProsItem } from './pros-item';

export const ProsList = () => (
  <ul className="grid grid-cols-1 gap-x-1 gap-y-12 sm:grid-cols-2 min-[900px]:grid-cols-4">
    {PROS_ITEMS.map((item) => (
      <ProsItem key={item.title} {...item} />
    ))}
  </ul>
);
