import {ValidationFunction} from "../hooks/invalid-state";
import {FormElementConfigs} from "../types/element-types";
import React from "react";

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type ClickHandler = (event: ClickEvent) => void;

export function getSubmitFunction(
  elements: FormElementConfigs,
  validationFunctions: ValidationFunction[],
  onClick?: ClickHandler,
) {
  return (event: ClickEvent) => {
    const invalid = elements.reduce((result, element, index) => {
      return validationFunctions[index](element.props.value) || result;
    }, false);

    if (!invalid && onClick) {
      onClick(event);
    }
  };
}