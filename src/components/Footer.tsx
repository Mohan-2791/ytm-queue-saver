import { Link } from 'react-router-dom';
import { LINKS } from '../data/links';

export default function Footer() {
  return (
    <footer className="footer">
      <Link className="brand brand--footer" to="/" aria-label="QueueSaver home">
        <span className="brand__mark">QS</span>
        <span>
          Queue<span className="brand__accent">Saver</span>
        </span>
      </Link>
      <p className="footer__tagline">Made for queues that deserve a second play.</p>

      <nav className="footer__cols" aria-label="Footer">
        <div className="footer__col">
          <span className="footer__col-label">Product</span>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Support</span>
          <Link to="/help">Help &amp; FAQ</Link>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKS.email}>Contact</a>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Legal</span>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </footer>
  );
}