import {RefObject, useEffect, useRef, useState} from 'react';

type ScrollableElement = HTMLElement | null;

export const useScrollToTop = <T extends ScrollableElement>({
  shouldScroll = false,
  dependencies = []
}: {
  shouldScroll?: boolean;
  dependencies: unknown[];
}): RefObject<HTMLElement> => {
  const ref = useRef<T | null>(null);
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && hasScroll) {
      ref.current.scrollIntoView({block: 'start'});
    }
    if (shouldScroll) {
      setHasScroll(true);
    }
  }, [...dependencies]);

  return ref;
};
