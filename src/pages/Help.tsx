import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';

const FAQ = [
  {
    q: 'How do I install QueueSaver?',
    a: 'Open the Chrome Web Store listing and click Add to Chrome. Pin the extension from your toolbar, open YouTube Music, and you are ready to snapshot your first queue.',
  },
  {
    q: 'Does it need YouTube Music Premium?',
    a: 'No. QueueSaver reads the queue state from the open YouTube Music page. Free accounts work the same way.',
  },
  {
    q: 'Why did I need to sign in with Google?',
    a: 'Restoring a snapshot creates a real private playlist in your own YouTube account. The sign-in is the extension asking for permission to do that on your behalf — nothing more.',
  },
  {
    q: 'What exactly does it save?',
    a: 'Only a snapshot of the current queue — track titles, artists, and video IDs. You choose what to keep; nothing is uploaded without your save.',
  },
  {
    q: 'Can I restore a snapshot more than once?',
    a: 'Yes. Each saved snapshot can be rebuilt into a fresh private playlist whenever you like, without affecting the original.',
  },
  {
    q: 'Are my snapshots private?',
    a: 'Yes. Restored playlists are created private by default, and snapshot data is tied to your account with credentials encrypted at rest.',
  },
  {
    q: 'What are the two spinning wheels on the home page?',
    a: 'They are decorative — a nod to cassette reels. The speaker graphic keeps the two reels spinning to show the monitor is live and listening.',
  },
  {
    q: 'It stopped working — what do I check?',
    a: 'Reload the YouTube Music tab, make sure you are signed in, and confirm the extension is enabled. If it persists, open an issue on GitHub with the steps that broke it.',
  },
];

export default function Help() {
  return (
    <>
      <section className="page-intro" aria-labelledby="help-title">
        <p className="eyebrow">Help &amp; support</p>
        <h1 id="help-title">
          Answers, <em>on record.</em>
        </h1>
        <p className="page-intro__lede">
          The most-asked questions about snapshotting, archiving, and restoring your queue. If you
          do not see yours, the next best answer is a message.
        </p>
      </section>

      <section className="faq" aria-label="Frequently asked questions">
        {FAQ.map((item, index) => (
          <details className="faq__item" key={item.q} open={index === 0}>
            <summary>
              <span>{item.q}</span>
              <span className="faq__toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <section className="closing" aria-labelledby="help-closing">
        <div>
          <p className="eyebrow">Still stuck?</p>
          <h2 id="help-closing">Open a ticket, not another tab.</h2>
          <p className="closing__lede">
            Reach out on GitHub or by email. Reply times are human — usually within a day.
          </p>
        </div>
        <div className="closing__actions">
          <a className="button button--light" href={LINKS.github} target="_blank" rel="noreferrer">
            Open an issue <span aria-hidden="true">&#8599;</span>
          </a>
          <a className="text-link" href={LINKS.email}>
            Email support <span aria-hidden="true">&#8599;</span>
          </a>
          <Link className="text-link" to="/privacy">
            Read the privacy policy <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </section>
    </>
  );
}