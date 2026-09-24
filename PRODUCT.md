# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both confirmed as equal:

- **Everyday YouTube Music listeners.** They lose queues to autoplay, shuffle takeovers, a finished album, or a mis-click that clears the deck in seconds. They want the queue back without rebuilding it.
- **Curators and archivists.** They actively save listening sessions over weeks and come back to them, building a long-term personal collection.

The current surface is the product's marketing site (web). The product as a whole also spans a Chrome extension and a backend.

## Product Purpose

QueueSaver snapshots the YouTube Music queue before it can disappear, stores sessions as quick wipe-saves or long-term archives, and restores a snapshot as a real private playlist on demand. Success means a queue that would have been lost is recoverable in one click, and the tool never gets in the way of the music.

## Positioning

The one claim a neighboring tool could not truthfully copy: QueueSaver is the rewind button for a lost queue — a safety net that captures the queue at the moment it is about to be cleared and brings it back as a private playlist. The distinctive mechanism is snapshot-before-wipe plus one-click restore into a normal YouTube playlist.

## Operating Context

- Runs in Chrome as an extension with a compact popup ("the deck").
- Reads queue/session state directly from the open YouTube Music page (vanilla JS content script).
- Google sign-in required — powers playlist restore on the user's behalf; no other accounts.
- Backend is FastAPI: JWT sessions, Pydantic validation, YouTube Data API calls.
- Storage is PostgreSQL via Supabase; OAuth tokens are encrypted at rest; snapshots stored as JSON columns.
- Free to install from the Chrome Web Store; open source on GitHub.

## Capabilities and Constraints

Confirmed capabilities (from site copy and product architecture):

- Session wipe saves — quick, disposable snapshots for a queue about to be cleared.
- Archive history — long-term saves built up over weeks.
- One-click restore — rebuilds a snapshot as a real private playlist in the user's account.
- Google sign-in — works with both `chrome.identity` access tokens and standard ID tokens.
- Encrypted storage — OAuth credentials encrypted at rest before touching the database.
- Restored playlists are private by default; snapshot data is tied to the account.
- Works without YouTube Music Premium.
- Each snapshot can be restored more than once.

Terminology used across product and site: queue, snapshot, session wipe-save, archive, restore, deck (the popup), console/signal chain (extension → API → storage).

Constraints and open facts:

- All external links are placeholders: Chrome Web Store ID, GitHub handle, API health URL, email, LinkedIn (`src/data/links.ts`).
- The site screenshot figures are placeholders, not real product images (see Evidence on Hand).
- The site is the only implemented surface; the extension and backend are described by it but not built into this repository.
- Deploy target for the marketing site not yet decided.

## Brand Commitments

- Name: **QueueSaver**.
- Tagline used in hero copy: "Your queue is a feeling. Keep it."
- Voice: felt, personal, music-literate — treats a queue as a moment worth keeping, not a list of tracks. Uses a cassette/tape/deck metaphor throughout (on record, signal chain, the deck, reels, SIDE A).
- Identity motif: a monitoring speaker/deck with two counter-rotating reels that appear on the homepage hero; both reels always rotate. This is an explicitly requested, binding decorative behavior.
- Recognized copy/phrases: "keep listening", "no ceremony required", "your listening, on your terms", "rewind button".
- Visual identity (confirmed by the built site): Syne display + DM Mono accents, dark deck (`--paper` #151a1b) with acid-lime (`--acid` #d5ef69), coral (`--coral` #ee8064), and metal tones; mono-uppercase micro-labels.

## Evidence on Hand

- None real yet. All site screenshot frames are placeholders (`Shot` component with a "screenshot placeholder" tag).
- Placeholder external identity: store ID, GitHub handle, email, LinkedIn, API health URL — nothing live.
- No real testimonials, case studies, press, or user data. Future work must not fabricate these.

## Product Principles

1. **Capture before the wipe.** The snapshot must exist before the moment is lost; saving is one action, out of the way until the queue is worth keeping.
2. **Listen first, tool second.** The extension waits quietly in the corner and never interrupts the music.
3. **Privacy by default.** Restored playlists are private, credentials are encrypted, and nothing is uploaded without the user's save.
4. **Open and honest.** Free, open source, auditable — "no black-box magic"; the deck, API, and storage are plainly explained.
5. **No lock-in.** Anything kept can be restored into a normal private playlist and walked away from at any time.

## Accessibility & Inclusion

- Site respects `prefers-reduced-motion` for ambient animation, with one binding exception: the hero reel animation is exempted at the product owner's explicit request ("the spokes must always rotate").
- No other product-specific accessibility requirement has been established; standard web accessibility hygiene applies.