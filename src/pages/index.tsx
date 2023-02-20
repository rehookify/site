import Head from 'next/head';
import { Inter } from '@next/font/google';
import { DiscordIcon, GithubIcon, Logo, TwitterIcon } from '@/icons';
import {
  SocialLink,
  ContentContainer,
  ContentSection,
  Footer,
} from '@/components';
import { DatePickerContent, ProsList } from '@/content';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hookify</title>
        <meta
          name="description"
          content="Tiny utils to build performant React apps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={inter.className}>
        <header className="w-full relative mb-24">
          <Logo />
          <nav className="flex justify-end items-center absolute top-0 right-0 h-full w-8/12 sm:h-[29%]">
            <SocialLink
              href="https://twitter.com/rehookify"
              className="p-1.5"
              aria-label="twitter link"
            >
              <TwitterIcon />
            </SocialLink>
            <SocialLink
              href="https://discord.gg/EsjhwxH79d"
              className="p-1"
              aria-label="discord link"
            >
              <DiscordIcon />
            </SocialLink>
            <SocialLink
              href="https://github.com/rehookify"
              className="p-2"
              aria-label="github link"
            >
              <GithubIcon />
            </SocialLink>
          </nav>
        </header>
        <ContentContainer>
          <ContentSection>
            <h1 className="font-black text-2 mb-6 text-2 text-center md:text-3 leading-none">
              <span className="text-3 uppercase md:text-5">Tiny utils</span>
              <br />
              to build performant React apps
            </h1>
            <p className="w-full max-w-2xl mx-auto text-xl text-center text-zinc-500 leading-8">
              [Re]Hookify offers a small, zero-dependency, highly efficient set
              of headless UI tools that are ready to use. It can help you build
              a design system using your React tech stack.
            </p>
          </ContentSection>
          <ContentSection>
            <ProsList />
          </ContentSection>
          <ContentSection>
            <DatePickerContent />
          </ContentSection>
        </ContentContainer>
        <Footer />
      </main>
    </>
  );
}
