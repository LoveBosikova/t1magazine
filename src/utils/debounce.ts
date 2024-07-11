import { useEffect, useCallback } from 'react';

export default function useDebounce(fn, dependencies, delay) {
  const callback = useCallback(fn, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
