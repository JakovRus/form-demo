import {useState} from 'react';
import {getValidator} from "../validation/get-validator";
import {FormElementConfigs, TypedFormElementConfig} from "../types/element-types";
import {FormState, getInitialState, getPartialSetter} from "../utils/get-initial-state";

export type ElementValue = string | string[] | number | undefined;
export type ValidationFunction = (value: ElementValue) => boolean;

export function useInvalidState(elements: FormElementConfigs) {
  const [invalidState, setInvalidState] = useState(getInitialState(elements, true));
  const setInvalid = getPartialSetter(invalidState, setInvalidState);

  const validate = (state: FormState) => {
    return elements.reduce((result: boolean, element: TypedFormElementConfig) => {
      const validate = getValidator(element.validation);
      const invalid = validate(state[element.key]);

      setInvalid(element.key, invalid);
      return invalid || result;
    }, false);
  };

  return {
    invalidState,
    validate,
  }
}