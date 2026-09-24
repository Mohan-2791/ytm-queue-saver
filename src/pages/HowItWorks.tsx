import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';
import Shot from '../components/Shot';

export default function HowItWorks() {
  return (
    <>
      <section className="page-intro" aria-labelledby="how-title">
        <p className="eyebrow">No ceremony required</p>
        <h1 id="how-title">
          Press save. <em>Keep listening.</em>
        </h1>
        <p className="page-intro__lede">
          Three steps between a doomed queue and a permanent playlist — and the extension never gets
          in the way of the music.
        </p>
      </section>

      <section className="how-full" aria-label="How it works">
        <ol className="steps steps--big">
          <li>
            <span>01</span>
            <div>
              <h3>Capture</h3>
              <p>
                The extension reads the current queue or session history straight out of the YouTube
                Music page.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Save</h3>
              <p>
                A snapshot posts to the backend, authenticated with a session token, tagged as
                session-wipe or archive.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Restore</h3>
              <p>
                On request, the backend creates a fresh private playlist in your account and refills
                it from the snapshot.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">At the console</p>
          <h2 id="gallery-title">Setting up and running it.</h2>
        </div>
        <div className="shot-grid">
          <Shot index="01" title="Install from the store" caption="Pin the extension, open the popup, and it's ready." />
          <Shot index="02" title="One-time sign-in" caption="Google login powers playlist restore. No extra accounts." />
          <Shot index="03" title="Saved, then restored" caption="The same queue days later, back as a playlist." />
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div>
          <p className="eyebrow">Stuck at any step?</p>
          <h2 id="closing-title">The help deck is always open.</h2>
        </div>
        <div className="closing__actions">
          <Link className="button button--light" to="/help">
            Visit Help <span aria-hidden="true">-&gt;</span>
          </Link>
          <a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer">
            Ask on GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </section>
    </>
  );
}