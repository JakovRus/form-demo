import {ValidateFunction} from "../hooks/invalid-state";
import React from "react";
import {FormState} from "./get-initial-state";

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type ClickHandler = (event: ClickEvent) => void;

export function getSubmitFunction(
  state: FormState,
  validate: ValidateFunction,
  onClick?: ClickHandler,
) {
  return (event: ClickEvent) => {
    const invalid = validate(state);

    if (!invalid && onClick) {
      onClick(event);
    }
  };
}