import {useState} from 'react';
import {getValidator} from "../validation/get-validator";
import {FormElementConfigs, TypedFormElementConfig} from "../types/element-types";
import {FormState, getInitialState, getPartialSetter} from "../utils/get-initial-state";
import {ElementValue} from "../utils/types";

export type ValidationFunction = (value: ElementValue) => boolean;
export type ValidateFunction = (state: FormState) => boolean;

export function useInvalidState(elements: FormElementConfigs) {
  const [invalidState, setInvalidState] = useState(getInitialState(elements, false));
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