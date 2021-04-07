import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/undraw_amusement_park.svg',
        description: (
            <>
                Titan is designed to be easy to use. All the available commands are listed in
                the help menu and on this site.
            </>
        ),
    },
    {
        title: 'Customizable',
        imageUrl: 'img/undraw_control_panel.svg',
        description: (
            <>
                There are many ways to customize Titan between server configs, user configs,
                user profiles, event announcements, and more.
            </>
        ),
    },
    {
        title: 'Server Moderation',
        imageUrl: 'img/undraw_security.svg',
        description: (
            <>
                Titan has multiple server moderation features including blacklisting words that
                can't be used and muting users in text and voice channels.
            </>
        ),
    },
    {
        title: 'User Profiles',
        imageUrl: 'img/undraw_profile.svg',
        description: (
            <>
                Ever user can customize their profile to include various things including their
                gender, pronouns, height, alignment, and more.
            </>
        ),
    },
    {
        title: 'User Relationships',
        imageUrl: 'img/undraw_wedding.svg',
        description: (
            <>
                Users are able to create a family tree by asking other users to date, marry, adopt,
                and more.
            </>
        ),
    },
    {
        title: 'Event Announcements',
        imageUrl: 'img/undraw_happy_announcement.svg',
        description: (
            <>
                Channels can be subscribed to events such as user joined, user left, and birthdays so
                that an announcement is sent in that channel when the event is triggered.
            </>
        ),
    }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`TitanBot`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              href={'https://whix100.github.io/r/titan'}>
              Invite
            </Link>
          </div>
          <a href="https://whix100.github.io/TitanDocs"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fwhix100.github.io%2FAssets%2FJson%2FTotalLinesShield.json"/></a>
          <a href="https://top.gg/bot/471489146238533633"><img src="https://top.gg/api/widget/status/471489146238533633.svg?noavatar=true"/></a>
          <a href="https://top.gg/bot/471489146238533633"><img src="https://top.gg/api/widget/owner/471489146238533633.svg?noavatar=true"/></a>
          <a href="https://top.gg/bot/471489146238533633"><img src="https://top.gg/api/widget/upvotes/471489146238533633.svg?noavatar=true"/></a>
          <a href="https://whix100.github.io/r/ipcd"><img src="https://discordapp.com/api/guilds/697526380400869386/widget.png?style=shield"/></a>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
