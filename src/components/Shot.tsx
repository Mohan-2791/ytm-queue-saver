interface ShotProps {
  index: string;
  title: string;
  caption: string;
  tall?: boolean;
}

export default function Shot({ index, title, caption, tall = false }: ShotProps) {
  return (
    <figure className={`shot${tall ? ' shot--tall' : ''}`}>
      <div className="shot__frame">
        <span className="shot__frame-index">{index}</span>
        <div className="shot__mock" aria-hidden="true">
          <span className="shot__mock-bar" />
          <span className="shot__mock-line shot__mock-line--lg" />
          <span className="shot__mock-line" />
          <span className="shot__mock-line shot__mock-line--sm" />
          <span className="shot__mock-btn" />
        </div>
        <span className="shot__frame-tag">screenshot placeholder</span>
      </div>
      <figcaption className="shot__caption">
        <strong className="shot__title">{title}</strong>
        <span className="shot__desc">{caption}</span>
      </figcaption>
    </figure>
  );
}