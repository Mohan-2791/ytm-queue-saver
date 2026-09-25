import { Link } from 'react-router-dom';
import type { Track } from '../types';
import { LINKS } from '../data/links';
import Speaker from '../components/Speaker';
import Shot from '../components/Shot';

interface HomeProps {
  activeTrack: Track;
}

export default function Home({ activeTrack }: HomeProps) {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> YouTube Music, with a rewind button
          </p>
          <h1 id="hero-title">
            Your queue is a feeling. <em>Keep it.</em>
          </h1>
          <p className="hero__lede">
            QueueSaver quietly snapshots the music you are about to lose, then brings it back as a
            real playlist when you need it.
          </p>
          <div className="hero__actions">
            <a
              className="button button--primary"
              href={LINKS.extension}
              target="_blank"
              rel="noreferrer"
            >
              Get QueueSaver <span aria-hidden="true">-&gt;</span>
            </a>
            <Link className="text-link" to="/how-it-works">
              See how it works <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>
          <p className="hero__note">Free to try. Built for Chrome and YouTube Music.</p>
        </div>

        <div className="hero__demo">
          <div className="demo-label">
            Live product preview <span>REC</span>
          </div>
          <Speaker activeTrack={activeTrack} />
          <p className="demo-caption">Two reels, always spinning. Try it across your music days.</p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Product benefits">
        <div>
          <strong>01</strong>
          <span>Snapshot before the wipe</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Archive the sessions worth keeping</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Restore to a private playlist</span>
        </div>
      </section>

      <section className="story" aria-labelledby="features-link">
        <div className="section-heading">
          <p className="eyebrow">The good stuff, on record</p>
          <h2 id="features-link">A tiny safety net for your best listening days.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature feature--wide">
            <span className="feature__index">A</span>
            <h3>Save the moment</h3>
            <p>When a new album or late-night shuffle takes over, keep the queue before the next click clears it.</p>
          </article>
          <article className="feature feature--accent">
            <span className="feature__index">B</span>
            <h3>Build a listening archive</h3>
            <p>Store the sessions you want to remember and return to them weeks later.</p>
          </article>
          <article className="feature feature--dark">
            <span className="feature__index">C</span>
            <h3>Restore without rebuilding</h3>
            <p>One click turns a snapshot back into a private YouTube Music playlist.</p>
          </article>
        </div>
        <p className="section-link">
          Dig into everything on the <Link to="/features">features page</Link>.
        </p>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">On the machine</p>
          <h2 id="gallery-title">What running the extension looks like.</h2>
        </div>
        <div className="shot-grid">
          <Shot
            index="01"
            title="Save the queue"
            caption="One tap snapshots the playing queue before it can vanish."
            clipSrc="/clips/save-queue.webm"
            alt="Clip of saving the YouTube Music queue"
          />
          <Shot
            index="02"
            title="Find it later"
            caption="Every archived session, listed and ready to replay."
            clipSrc="/clips/archive-list.webm"
            alt="Clip of browsing saved music session archives"
          />
          <Shot
            index="03"
            title="Restore as a playlist"
            caption="Turn a kept memory back into a private playlist."
            clipSrc="/clips/restore-playlist.webm"
            alt="Clip of restoring a session to a private playlist"
          />
        </div>
      </section>

      <section className="how" aria-labelledby="how-title">
        <div className="how__intro">
          <p className="eyebrow">No ceremony required</p>
          <h2 id="how-title">
            Press save.
            <br />
            <em>Keep listening.</em>
          </h2>
          <p>QueueSaver stays out of the way until a queue is worth keeping.</p>
        </div>
        <ol className="steps">
          <li>
            <span>01</span>
            <div>
              <h3>Capture</h3>
              <p>Read the current queue straight from YouTube Music.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Store</h3>
              <p>Save it as a quick session or a long-term archive.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Restore</h3>
              <p>Bring the whole thing back as a private playlist.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div>
          <p className="eyebrow">Leave the tab better than you found it</p>
          <h2 id="closing-title">Your next favorite playlist is already playing.</h2>
        </div>
        <a className="button button--light" href={LINKS.extension} target="_blank" rel="noreferrer">
          Add QueueSaver <span aria-hidden="true">-&gt;</span>
        </a>
      </section>
    </>
  );
}