import type { Track } from '../types';
import Reel from './Reel';
import { useTapeCounter } from '../hooks/useTapeCounter';

interface SpeakerProps {
  activeTrack: Track;
}

export default function Speaker({ activeTrack }: SpeakerProps) {
  const counter = useTapeCounter();

  return (
    <div className="speaker" aria-label="QueueSaver monitor">
      <span className="screw screw--tl" aria-hidden="true" />
      <span className="screw screw--tr" aria-hidden="true" />
      <span className="screw screw--bl" aria-hidden="true" />
      <span className="screw screw--br" aria-hidden="true" />

      <div className="speaker__plate">
        <span className="speaker__brand">
          QUEUE·SAVER <em>MONITOR</em>
        </span>
        <span className="speaker__counter" aria-hidden="true">
          {counter}
        </span>
      </div>

      <div className="speaker__face" aria-hidden="true">
        <span className="speaker__vent" />
        <div className="speaker__driver">
          <span className="speaker__ring" />
          <Reel />
        </div>
        <div className="speaker__driver">
          <span className="speaker__ring" />
          <Reel reverse />
        </div>
        <span className="speaker__vent" />
      </div>

      <div className="speaker__bottom">
        <span className="speaker__bottom-track">SIDE A · {activeTrack.name}</span>
        <span className="speaker__bottom-hint">SPINNING</span>
      </div>
    </div>
  );
}