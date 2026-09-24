import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';

const SECTIONS = [
  {
    title: 'The short version',
    body: 'QueueSaver stores only the snapshots you explicitly save, keeps them tied to your Google account, and never shares them. It cannot see your browsing history, other sites, or anything outside of the YouTube Music tab you allow it to read.',
  },
  {
    title: 'What it collects',
    body: 'When you save a queue, the extension records the tracks in that queue — title, artist, and video ID. Sign-in uses Google\'s OAuth flow, which returns a token used only to create private playlists on your behalf.',
  },
  {
    title: 'What it does not collect',
    body: 'No playback analytics, no listening history beyond what you save, no keystrokes, no scripts on non-YouTube pages. The extension stays dormant until you open its popup on a YouTube Music tab.',
  },
  {
    title: 'Where it is stored',
    body: 'Snapshots are stored in a PostgreSQL database accessed through the QueueSaver API. OAuth tokens are encrypted at rest. Restored playlists are created as private, exactly as you would create them yourself.',
  },
  {
    title: 'How it is shared',
    body: 'It is not. Snapshot data is scoped to your own account and is never sold, licensed, or exposed to advertisers. Aggregate, anonymous statistics (if ever used) never include your queue contents.',
  },
  {
    title: 'Your control',
    body: 'You can delete any snapshot from the archive view at any time, and removing the extension stops all collection immediately. You can also request full deletion of your stored data by emailing the address below.',
  },
  {
    title: 'Contact',
    body: 'Privacy questions, deletion requests, or anything else: ',
  },
];

export default function Privacy() {
  return (
    <>
      <section className="page-intro page-intro--legal" aria-labelledby="privacy-title">
        <p className="eyebrow">Last updated · 2026</p>
        <h1 id="privacy-title">
          Privacy <em>policy</em>
        </h1>
        <p className="page-intro__lede">
          QueueSaver was built around a simple rule: your listening is yours. This page explains —
          in plain language — what the extension touches, stores, and shares (and what it never
          does).
        </p>
      </section>

      <section className="legal" aria-label="Privacy policy">
        {SECTIONS.map((section) => (
          <article className="legal__section" key={section.title}>
            <h2>{section.title}</h2>
            <p>
              {section.body}
              {section.title === 'Contact' ? (
                <a href={LINKS.email} target="_blank" rel="noreferrer">
                  support@queuesaver.app
                </a>
              ) : null}
            </p>
          </article>
        ))}
        <p className="legal__footnote">
          This policy applies to the QueueSaver Chrome extension and its companion site.{' '}
          <Link to="/terms">Read the terms of service</Link> for the legalese.
        </p>
      </section>
    </>
  );
}