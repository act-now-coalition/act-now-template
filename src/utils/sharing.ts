/** Helpers and React Hooks relating to share images and share links. */
import { useEffect, useState, useCallback, useRef } from "react";
import { ParsedUrlQuery } from "querystring";
import { NextRouter } from "next/router";

/**
 * React hook to fetch query parameters from the Next.js router.
 *
 * @param router The Next.js router.
 * @returns The query parameters.
 */
export const useQueryParams = (
  router: NextRouter
): ParsedUrlQuery | undefined => {
  const [params, setParams] = useState<ParsedUrlQuery | undefined>(undefined);
  useEffect(() => {
    const params =
      Object.keys(router.query).length === 0 ? undefined : router.query;
    setParams(params);
  }, [router]);
  return params;
};

/** Hook to track element resizing using the ResizeObserver API
 *
 * Interpolated from: https://tobbelindstrom.com/blog/resize-observer-hook/
 */
export const useResizeObserver = () => {
  const [observerEntry, setObserverEntry] =
    useState<ResizeObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const disconnect = useCallback(() => observer.current?.disconnect(), []);

  const observe = useCallback(() => {
    observer.current = new ResizeObserver(([entry]) => setObserverEntry(entry));
    if (node) {
      observer.current.observe(node);
    }
  }, [node]);

  useEffect(() => {
    observe();
    return () => disconnect();
  }, [disconnect, observe]);

  return { ref: setNode, observerEntry: observerEntry };
};
