import React, { FC, ReactNode } from 'react';

interface ProsItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ProsItem: FC<ProsItemProps> = ({ icon, title, description }) => (
  <li className="pros-item">
    <div className="pros-item__icon">{icon}</div>
    <h3 className="pros-item__title">{title}</h3>
    <p className="pros-item__description">{description}</p>
  </li>
);
