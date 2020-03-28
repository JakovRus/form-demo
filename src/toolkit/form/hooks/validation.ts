import {getFieldValidationFunction, getStateValidationFunction} from "../validation/validation";
import {useCallback} from "react";
import {PartialSetter} from "../utils/get-initial-state";
import {TypedFormElementConfig} from "../types/element-types";

export function useValidation(
  elements: TypedFormElementConfig[],
  setInvalid: PartialSetter<boolean>,
) {
  const validate = useCallback(getStateValidationFunction(elements, setInvalid), [
    elements,
    setInvalid,
  ]);

  const validateField = useCallback(getFieldValidationFunction(elements, setInvalid), [
    elements,
    setInvalid,
  ]);

  return {
    validate,
    validateField,
  }
}