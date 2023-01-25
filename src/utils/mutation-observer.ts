import { RefObject, useEffect, useMemo } from "react";

// TODO: Cleanup and move to act-now-packages

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const isSSR: boolean = !(
  typeof window !== "undefined" && window.document?.createElement
);

export const getRefElement = <T>(
  element?: RefObject<Element> | T
): Element | T | undefined | null => {
  // eslint-disable-next-line
  if (element && "current" in element) {
    return element.current;
  }
  return element;
};

interface Props {
  ref?: RefObject<Element> | Element | Node | null;
  callback?: MutationCallback;
  options?: MutationObserverInit;
}

export const useMutationObserver = ({
  ref,
  callback,
  options = {},
}: Props): void => {
  const observer = useMemo(
    () =>
      !isSSR
        ? new MutationObserver((mutationRecord, mutationObserver) => {
            callback?.(mutationRecord, mutationObserver);
          })
        : null,
    [callback]
  );

  useEffect(() => {
    const element = getRefElement(ref);

    if (observer && element) {
      observer.observe(element, options);
      return () => observer.disconnect();
    }
  }, [ref, observer, options]);
};
