import {TypedFormElementConfig} from "../types/element-types";
import {Dispatch, SetStateAction} from "react";

export type State<T> = { [key: string]: T };
export type InvalidState = State<boolean>;
export type FormState = State<string>;
export type PartialSetter<T> = (key: string, value: T) => void;

export function getInitialState<T = string>(elements: TypedFormElementConfig[], initialValue: T) {
  return elements.reduce((state: State<T>, element) => {
    state[element.key] = initialValue;

    return state;
  }, {});
}



export function getPartialSetter<V>(setState: Dispatch<SetStateAction<State<V>>>) {
  return (key: string, value: V) => {
    setState((prevState: State<V>) => {
      const newState: State<V> = Object.assign({}, prevState);
      newState[key] = value;

      return newState;
    })
  }
}