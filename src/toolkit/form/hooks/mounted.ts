import {useEffect, useRef} from "react";

export function useMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true;
    }
  }, []);

  return isMounted.current;
}