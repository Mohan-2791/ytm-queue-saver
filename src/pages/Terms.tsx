import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: 'The deal',
    body: 'QueueSaver is provided as-is for your personal use. By installing or using it, you accept this agreement.',
  },
  {
    title: 'Use of the service',
    body: 'You may use QueueSaver to save and restore YouTube Music queues on your own account. You may not reverse-engineer, resell, or repackage it without permission. The extension is free to try; features that require backend resources may be limited or rate-limited to keep the service healthy.',
  },
  {
    title: 'Your data',
    body: 'Snapshots you save remain yours. We store and restore them exactly as described in the privacy policy and never claim ownership of the music, playlists, or queues that pass through QueueSaver.',
  },
  {
    title: 'Availability',
    body: 'YouTube Music and Chrome change without warning, so QueueSaver may need updates to keep working. We do our best, but do not guarantee uninterrupted or error-free operation, and the extension may stop working if a platform change breaks it.',
  },
  {
    title: 'Liability',
    body: 'To the fullest extent permitted by law, QueueSaver is not liable for any loss, including lost queues or playlists, arising from use of the extension. The snapshot you save is always your responsibility to keep.',
  },
  {
    title: 'Changes',
    body: 'This agreement may be updated as the product evolves. Continued use of QueueSaver after changes means you accept the updated terms. The date above reflects the latest revision.',
  },
];

export default function Terms() {
  return (
    <>
      <section className="page-intro page-intro--legal" aria-labelledby="terms-title">
        <p className="eyebrow">Last updated · 2026</p>
        <h1 id="terms-title">
          Terms of <em>service</em>
        </h1>
        <p className="page-intro__lede">
          The fine print, kept short. The spirit of it: enjoy the extension, keep your queues safe,
          and do not abuse the pipes that make it run.
        </p>
      </section>

      <section className="legal" aria-label="Terms of service">
        {SECTIONS.map((section) => (
          <article className="legal__section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
        <p className="legal__footnote">
          Questions about this agreement? <Link to="/help">The help desk is open</Link>.
        </p>
      </section>
    </>
  );
}