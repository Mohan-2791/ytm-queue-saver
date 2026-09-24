import { useEffect, useState } from 'react';

const INTERVAL_MS = 1000;
const MAX_COUNT = 9999;

export function useTapeCounter(): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((current) => (current >= MAX_COUNT ? 0 : current + 1));
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return String(count).padStart(4, '0');
}