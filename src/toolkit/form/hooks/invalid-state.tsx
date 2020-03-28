import {useState} from 'react';
import {FormElementConfigs} from "../types/element-types";
import {FormState, getInitialState, getPartialSetter} from "../utils/get-initial-state";

export type ValidateFunction = (state: FormState) => boolean;

export function useInvalidState(elements: FormElementConfigs) {
  const [invalidState, setInvalidState] = useState(getInitialState(elements, false));
  const setInvalid = getPartialSetter(setInvalidState);

  return {
    invalidState,
    setInvalid,
  }
}