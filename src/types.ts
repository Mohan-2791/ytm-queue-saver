export type TrackId = 'home' | 'features' | 'how-it-works' | 'about' | 'help' | 'privacy' | 'terms';

export interface Track {
  id: TrackId;
  num: string;
  name: string;
  time: string;
}