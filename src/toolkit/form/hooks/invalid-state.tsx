import {useState} from 'react';
import {getValidator} from "../validation/get-validator";
import {FormElementConfigs} from "../types/element-types";

export type ElementValue = string | string[] | number | undefined;
export type ValidationFunction = (value: ElementValue) => boolean;

export function useInvalidState(elements: FormElementConfigs) {
  const [invalidState, setInvalidState] = useState(getInitialValue(elements.length));

  const setInvalid = (index: number, invalid: boolean) => {
    const newState = invalidState.concat([]);
    newState[index] = invalid;

    setInvalidState(newState);
  };

  const validationFunctions: ValidationFunction[] =
    elements.map((element, index) => {
      return (value: ElementValue) => {
        const validate = getValidator(element.validation);

        const invalid = validate(value);
        setInvalid(index, invalid);

        return invalid;
      }
    });

  return {
    invalidState,
    validationFunctions,
  }
}

function getInitialValue(length: number) {
  return Array.from({length}, () => false);
}