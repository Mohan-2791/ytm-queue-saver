interface ShotProps {
  index: string;
  title: string;
  caption: string;
  clipSrc?: string;
  posterSrc?: string;
  alt?: string;
  tall?: boolean;
}

export default function Shot({ index, title, caption, clipSrc, posterSrc, alt, tall = false }: ShotProps) {
  return (
    <figure className={`shot${tall ? ' shot--tall' : ''}`}>
      <div className="shot__frame">
        <span className="shot__frame-index">{index}</span>

        {clipSrc ? (
          <video
            className="shot__video"
            src={clipSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-label={alt || title}
          />
        ) : (
          <div className="shot__mock" aria-hidden="true">
            <span className="shot__mock-bar" />
            <span className="shot__mock-line shot__mock-line--lg" />
            <span className="shot__mock-line shot__mock-line--sm" />
            <span className="shot__mock-btn" />
          </div>
        )}
      </div>
      <figcaption className="shot__caption">
        <strong className="shot__title">{title}</strong>
        <span className="shot__desc">{caption}</span>
      </figcaption>
    </figure>
  );
}