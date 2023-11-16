import { Hash } from 'lucide-react';
import { FC, HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 2 | 3 | 4 | 5 | 6;
}

export const Heading: FC<HeadingProps> = ({ level, children, ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        className="group relative flex items-center no-underline"
      >
        <Hash
          size={20}
          className="absolute -left-6 hidden text-zinc-600 opacity-0 transition-all duration-300 hover:text-zinc-900 group-hover:opacity-100 group-focus:opacity-100 dark:text-zinc-400 dark:hover:text-zinc-100 md:flex"
        />
        {children}
      </a>
    </Tag>
  );
};
