import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smooth-scrolls to an element whose id matches the current URL hash.
 * Designed for hash routes like “…/home#projects”.
 */
export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // wait for DOM paint; then find the element
    requestAnimationFrame(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }, [hash]);
}
