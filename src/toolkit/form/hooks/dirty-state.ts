import {useEffect, useRef} from "react";
import {ElementValue} from "../utils/types";
import {useMounted} from "./mounted";

export function useDirtyState(value: ElementValue) {
  const isDirty = useRef(false);
  const isMounted = useMounted();

  useEffect(() => {
    if(isMounted) {
      isDirty.current = true;
    }
  }, [value]);

  return isDirty.current;
}