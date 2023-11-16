import nextMDX from '@next/mdx';
import { readFileSync } from 'fs';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: {
    dark: JSON.parse(
      readFileSync(new URL('./assets/dark-code-theme.json', import.meta.url)),
    ),
    light: JSON.parse(
      readFileSync(new URL('./assets/light-code-theme.json', import.meta.url)),
    ),
  },
  keepBackground: false,
  tokensMap: {
    objectKey: 'meta.object-literal.key',
    function: 'entity.name.function',
    param: 'variable.parameter',
    const: 'variable.other.constant',
    class: 'support.class',
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeAccessibleEmojis,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
