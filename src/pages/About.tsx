import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';
import Shot from '../components/Shot';

export default function About() {
  return (
    <>
      <section className="page-intro" aria-labelledby="about-title">
        <p className="eyebrow">About QueueSaver</p>
        <h1 id="about-title">
          A better kind of <em>undo.</em>
        </h1>
        <p className="page-intro__lede">
          QueueSaver is a small Chrome extension for the part of YouTube Music that disappears too
          easily: the queue you made without meaning to.
        </p>
      </section>

      <section className="about-copy" aria-label="The story">
        <div className="about-copy__lead">
          <p>
            It watches for the moment a queue is about to be replaced, keeps a snapshot, and gives
            you a clean way to turn that moment back into a playlist.
          </p>
        </div>
        <div className="about-copy__rest">
          <p>
            Listening to music is a felt experience. A queue is not a list of tracks — it is the
            shape of an evening, a commute, a mood. And then, without warning, it is gone: an album
            ends, a shuffle takes over, a mis-click clears the deck within seconds.
          </p>
          <p>
            QueueSaver was built to give you the one thing a streaming service cannot: a rewind
            button for the moment you are about to lose.
          </p>
          <p>
            No accounts beyond the Google sign-in you already use. No black-box magic. A snapshot
            stored safely, restored into a real private playlist whenever you ask for it back.
          </p>
        </div>
      </section>

      <section className="story" aria-labelledby="about-features">
        <div className="section-heading">
          <p className="eyebrow">What it believe in</p>
          <h2 id="about-features">Your listening, on your terms.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature feature--wide">
            <span className="feature__index">A</span>
            <h3>Privacy first</h3>
            <p>Snapshots store only what you save, encrypted, tied to your account.</p>
          </article>
          <article className="feature feature--accent">
            <span className="feature__index">B</span>
            <h3>No lock-in</h3>
            <p>Restore into a normal, private playlist — and walk away any time.</p>
          </article>
          <article className="feature feature--dark">
            <span className="feature__index">C</span>
            <h3>Out of the way</h3>
            <p>It waits quietly in the corner until a queue is worth keeping.</p>
          </article>
        </div>
      </section>

      <section className="gallery" aria-labelledby="about-gallery">
        <div className="section-heading">
          <p className="eyebrow">The family tape</p>
          <h2 id="about-gallery">One tool, three faces.</h2>
        </div>
        <div className="shot-grid">
          <Shot index="01" title="The popup" caption="Everything fits in a compact, always-on deck." />
          <Shot index="02" title="The archive" caption="Sessions you chose to keep, ready when you need them." />
          <Shot index="03" title="The restore" caption="A single click remakes the moment as a playlist." />
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div>
          <p className="eyebrow">Want the full story?</p>
          <h2 id="closing-title">Built open, kept honest.</h2>
        </div>
        <div className="closing__actions">
          <a className="button button--light" href={LINKS.github} target="_blank" rel="noreferrer">
            View on GitHub <span aria-hidden="true">&#8599;</span>
          </a>
          <Link className="text-link" to="/help">
            Read the help desk <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </section>
    </>
  );
}