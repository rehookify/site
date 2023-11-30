'use client';
import '@docsearch/css';
import './doc-search.css';

import { DocSearch as Search } from '@docsearch/react';

export const DocSearch = () => {
  return (
    <Search
      appId="J193U5G5TJ"
      indexName="rehookify"
      apiKey="4c7a6e2678816130f1b761a52022f0d2"
      maxResultsPerGroup={7}
    />
  );
};
