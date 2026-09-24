import { Link, NavLink } from 'react-router-dom';
import { LINKS } from '../data/links';

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const NAV: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/about', label: 'About' },
  { to: '/help', label: 'Help' },
];

export default function Topbar() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="QueueSaver home">
        <span className="brand__mark">QS</span>
        <span>
          Queue<span className="brand__accent">Saver</span>
        </span>
      </Link>
      <nav className="nav" aria-label="Main navigation">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="nav__cta" href={LINKS.extension} target="_blank" rel="noreferrer">
        Add to Chrome <span aria-hidden="true">-&gt;</span>
      </a>
    </header>
  );
}