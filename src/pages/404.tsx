import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { ExternalLinkIcon, NotFoundIcon } from '../icons';

import '../styles/not-found.css';
import { PrimaryButton } from '../components/primary-button';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="main not-found">
      <div className="not-found__icon">
        <NotFoundIcon />
      </div>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        Sorry, we can&apos;t seem to find what you&apos;re looking for.
      </p>
      <Link to="/" className="not-found__cta">
        <PrimaryButton>
          Go home
          <ExternalLinkIcon />
        </PrimaryButton>
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>Not found</title>
    <meta
      name="description"
      content="Tiny utils to build performant React apps"
    />
  </>
);
