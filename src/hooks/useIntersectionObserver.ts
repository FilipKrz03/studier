import { RefObject, useEffect, useState } from "react";

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  freezeOnceVisible: boolean
): IntersectionObserverEntry | undefined {

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    if (frozen || !node) return;
    const observer = new IntersectionObserver(updateEntry);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, frozen]);

  return entry;
}
