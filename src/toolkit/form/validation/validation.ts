import {FormState, PartialSetter} from "../utils/get-initial-state";
import {getValidator} from "./get-validator";
import {TypedFormElementConfig} from "../types/element-types";
import {ValidationType} from "../types/validation";
import {ElementValue} from "../utils/types";

const VALIDATION_ERROR = 'Validation error: there is not an element with such key';

export function getFieldValidationFunction(
  elements: TypedFormElementConfig[],
  setInvalid: PartialSetter<boolean>,
) {
  return (key: string) => {
    const element = elements.find(config => config.key === key);
    if(!element) {
      throw new Error(VALIDATION_ERROR)
    }

    const invalid = validateElement(element.props.value, element.validation);
    setInvalid(key, invalid);

    return invalid;
  }
}

export function getStateValidationFunction(
  elements: TypedFormElementConfig[],
  setInvalid: PartialSetter<boolean>,
) {
  return (state: FormState) => {
    return elements.reduce((result: boolean, element: TypedFormElementConfig) => {
      const invalid = validateElement(state[element.key], element.validation);

      setInvalid(element.key, invalid);
      return invalid || result;
    }, false);
  }
}

function validateElement(
  value: ElementValue,
  validation?: ValidationType,
) {
  const validate = getValidator(validation);
  return validate(value);
}