import React, { FC, PropsWithChildren } from 'react';

import '../styles/social.css';

interface SocialLinkProps {
  className?: string;
  href: string;
}

export const SocialLink: FC<PropsWithChildren<SocialLinkProps>> = ({
  children,
  className,
  href,
  ...props
}) => (
  <a
    href={href}
    className={`social-link ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
