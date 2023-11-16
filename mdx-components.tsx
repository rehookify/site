import type { MDXComponents } from 'mdx/types';

import { Heading } from '~/components/mdx-heading';
import { A } from '~/components/mdx-link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    h5: (props) => <Heading level={5} {...props} />,
    h6: (props) => <Heading level={6} {...props} />,
    a: A,
  };
}
