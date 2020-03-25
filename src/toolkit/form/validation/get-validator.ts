import {ValidationType} from "../types/validation";

export function getValidator(validationType?: ValidationType) {
    switch (validationType) {
        case ValidationType.REQUIRED: {
            return (value: any) => !!value;
        }
        case ValidationType.NUMBER: {
            return (value: any) => isNaN(value);
        }
        default: {
            return () => false;
        }
    }
}