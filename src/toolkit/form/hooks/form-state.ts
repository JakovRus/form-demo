import {useCallback, useState} from "react";
import {FormElementConfigs} from "../types/element-types";
import {getInitialState, getPartialSetter} from "../utils/get-initial-state";

export function useFormState(elements: FormElementConfigs) {
  const [state, setStateObject] = useState(getInitialState(elements, ''));
  const setState = useCallback(getPartialSetter(setStateObject), [setStateObject]);

  return {state, setState};
}
