import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';
import Shot from '../components/Shot';

export default function Features() {
  return (
    <>
      <section className="page-intro" aria-labelledby="features-title">
        <p className="eyebrow">The good stuff, on record</p>
        <h1 id="features-title">Everything it keeps safe.</h1>
        <p className="page-intro__lede">
          QueueSaver is a small Chrome extension for the part of YouTube Music that disappears too
          easily: the queue you made without meaning to.
        </p>
      </section>

      <section className="feat-list" aria-label="Feature list">
        <article className="feat">
          <div className="feat__body">
            <span className="feat__name">Session wipe saves</span>
            <span className="feat__desc">Quick, disposable snapshots for a queue you're about to clear.</span>
          </div>
          <span className="feat__tag">core</span>
        </article>
        <article className="feat">
          <div className="feat__body">
            <span className="feat__name">Archive history</span>
            <span className="feat__desc">Long-term saves you can build up over weeks and come back to.</span>
          </div>
          <span className="feat__tag">core</span>
        </article>
        <article className="feat">
          <div className="feat__body">
            <span className="feat__name">One-click restore</span>
            <span className="feat__desc">Rebuilds the snapshot as a real, private playlist in your account.</span>
          </div>
          <span className="feat__tag">core</span>
        </article>
        <article className="feat">
          <div className="feat__body">
            <span className="feat__name">Google sign-in</span>
            <span className="feat__desc">Works with both chrome.identity access tokens and standard ID tokens.</span>
          </div>
          <span className="feat__tag">auth</span>
        </article>
        <article className="feat">
          <div className="feat__body">
            <span className="feat__name">Encrypted storage</span>
            <span className="feat__desc">OAuth credentials are encrypted at rest before they touch the database.</span>
          </div>
          <span className="feat__tag">security</span>
        </article>
      </section>

      <section className="chain" aria-labelledby="chain-title">
        <div className="section-heading">
          <p className="eyebrow">Under the hood</p>
          <h2 id="chain-title">The signal chain.</h2>
        </div>
        <div className="chain__stages">
          <article className="chain-card chain-card--in">
            <span className="chain-card__index">IN</span>
            <h3>Extension</h3>
            <p>Chrome extension, vanilla JS content script reading the YTM player state.</p>
          </article>
          <article className="chain-card chain-card--deck">
            <span className="chain-card__index">DECK</span>
            <h3>API</h3>
            <p>FastAPI backend — JWT sessions, Pydantic validation, YouTube Data API calls.</p>
          </article>
          <article className="chain-card chain-card--tape">
            <span className="chain-card__index">TAPE</span>
            <h3>Storage</h3>
            <p>PostgreSQL (Supabase), encrypted OAuth tokens, snapshots as JSON columns.</p>
          </article>
        </div>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">In the popup</p>
          <h2 id="gallery-title">A tiny deck with the whole set.</h2>
        </div>
        <div className="shot-grid">
          <Shot index="01" title="Save panel" caption="The popup at rest, ready to capture the current queue." />
          <Shot index="02" title="Archive view" caption="Sessions and archives, scanned in seconds." />
          <Shot index="03" title="Restore confirmed" caption="The moment a saved queue becomes a playlist again." />
        </div>
        <p className="section-link">
          Want the full walkthrough? Read the <Link to="/how-it-works">how it works</Link> page, or{' '}
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            browse the code on GitHub
          </a>
          .
        </p>
      </section>
    </>
  );
}