import {TypedFormElementConfig} from "../types/element-types";

export type State<T> = { [key: string]: T };
export type InvalidState = State<boolean>;
export type FormState = State<string>;

export function getInitialState<T = string>(elements: TypedFormElementConfig[], initialValue: T) {
  return elements.reduce((state: State<T>, element) => {
    state[element.key] = initialValue;

    return state;
  }, {});
}

export function getPartialSetter<T>(state: State<T>, setState: (state: State<T>) => void) {
  return (key: string, value: T) => {
    const newState: State<T> = Object.assign({}, state);
    newState[key] = value;

    setState(newState);
  }
}