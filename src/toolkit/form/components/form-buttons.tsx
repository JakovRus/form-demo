import React from 'react';
import {FormButtonConfig} from "../types/button-types";
import {getSubmitFunction} from "../utils/get-submit-function";
import {ValidationFunction} from "../hooks/invalid-state";
import {FormConfig} from "../types/types";
import {FormElementConfigs} from "../types/element-types";

type FormButtonsProps = {
  validationFunctions: ValidationFunction[];
  config: FormConfig;
}

export function FormButtons(props: FormButtonsProps) {
  const {buttons, elements} = props.config;
  if(!buttons) {
    return null;
  }

  const buttonElements = buttons.map((button) => {
    const onClick = getClickHandler(button, elements, props.validationFunctions);

    return <button {...button.props}
                   onClick={onClick}
                   key={button.id}/>
  });

  return <>{buttonElements}</>;
}

function getClickHandler(
  buttonConfig: FormButtonConfig,
  elements: FormElementConfigs,
  validationFunctions: ValidationFunction[],
) {
  const {onClick} = buttonConfig.props;

  return buttonConfig.isSubmit ?
    getSubmitFunction(
      elements,
      validationFunctions,
      onClick
    ) : onClick;
}