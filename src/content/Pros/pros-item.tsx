import React, { FC, ReactNode } from 'react';

interface ProsItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ProsItem: FC<ProsItemProps> = ({ icon, title, description }) => (
  <li className="text-center">
    <div className="text-2 sm:text-3">{icon}</div>
    <h2 className="text-2 mb-2 font-bold">{title}</h2>
    <p className="text-xl text-zinc-500">{description}</p>
  </li>
);
