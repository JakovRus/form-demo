import React from 'react';
import {FormButtonConfig} from "../types/button-types";
import {getSubmitFunction} from "../utils/get-submit-function";
import {ValidateFunction} from "../hooks/invalid-state";
import {FormState} from "../utils/get-initial-state";

type FormButtonsProps = {
  validate: ValidateFunction;
  state: FormState;
  buttons?: FormButtonConfig[];
}

export function FormButtons(props: FormButtonsProps) {
  const {buttons, state, validate} = props;
  if (!buttons) {
    return null;
  }

  const buttonElements = buttons.map((button) => {
    const onClick = getClickHandler(button, state, validate);

    return <button {...button.props}
                   onClick={onClick}
                   key={button.id}/>
  });

  return <>{buttonElements}</>;
}

function getClickHandler(
  buttonConfig: FormButtonConfig,
  state: FormState,
  validate: ValidateFunction,
) {
  const {onClick} = buttonConfig.props;

  return buttonConfig.isSubmit ?
    getSubmitFunction(
      state,
      validate,
      onClick
    ) : onClick;
}