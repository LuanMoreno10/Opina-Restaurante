import { useEffect } from "react";

/** Sets the browser tab title for the current page; restores the previous one on unmount. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
