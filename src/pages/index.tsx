import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import {
  Logo,
  TwitterIcon,
  DiscordIcon,
  GithubIcon,
  DatePickerLogo,
  ExternalLinkIcon,
} from '../icons';
import { Content, SocialLink, ProsItem, Footer } from '../components';
import { PROS_ITEMS } from '../constants/pros';

import '../styles/dp.css';
import '../styles/main.css';
import '../styles/page.css';
import '../styles/pros.css';
import { DatePicker } from '../date-picker/date-picker';
import { PrimaryButton } from '../components/primary-button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <header className="main-header">
        <Logo />
        <nav className="main-navigation">
          <SocialLink
            href="https://twitter.com/rehookify"
            className="social-link--twitter"
            aria-label="twitter link"
          >
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            href="https://discord.gg/EsjhwxH79d"
            className="social-link--discord"
            aria-label="discord link"
          >
            <DiscordIcon />
          </SocialLink>
          <SocialLink
            href="https://github.com/rehookify"
            className="social-link--github"
            aria-label="github link"
          >
            <GithubIcon />
          </SocialLink>
        </nav>
      </header>
      <Content>
        <section className="page-section">
          <h1 className="page-section__title page-title">
            <span className="page-title--huge">Tiny utils</span>
            <br />
            to build performant React apps
          </h1>
          <p className="page-description">
            [Re]Hookify offers a small, zero dependant, highly efficient,
            accessible ready set of headless UI tools. It will help you to build
            the design system with your React tech stack.
          </p>
        </section>
        <section className="page-section">
          <ul className="clean-list pros">
            {PROS_ITEMS.map((item) => (
              <ProsItem key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section className="page-section">
          <div className="dp__title">
            <DatePickerLogo />
          </div>
          <div className="dp">
            <p className="dp__text dp-title-area">
              Set of React hooks that will help you to build a date or range
              picker in your apps.
            </p>
            <div className="dp__info dp-features-area">
              <p className="dp__text">Main features:</p>
              <ul className="dp-features">
                <li className="dp-features__item">
                  Single or Multiple date picker
                </li>
                <li className="dp-features__item">Range picker</li>
                <li className="dp-features__item">Time picker</li>
                <li className="dp-features__item">Multiple calendars</li>
                <li className="dp-features__item">Localization</li>
                <li className="dp-features__item">Prop-getters</li>
              </ul>
              <a
                href="https://github.com/rehookify/datepicker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton>
                  Documentation <ExternalLinkIcon />
                </PrimaryButton>
              </a>
            </div>
            <div className="dp-calendar-area">
              <DatePicker />
            </div>
          </div>
        </section>
      </Content>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Rehookify</title>
    <meta
      name="description"
      content="Tiny utils to build performant React apps"
    />
  </>
);
