import React from 'react';
import {useInvalidState} from "./hooks/invalid-state";
import {FormElement} from "./form-element";
import {FormConfig} from "./types/types";
import {FormElementConfigs} from "./types/element-types";

export type FormProps = {
  config: FormConfig;
}

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type ClickHandler = (event: ClickEvent) => void;

export function Form(props: FormProps) {
  const {config} = props;
  const {
    invalidState,
    validators
  } = useInvalidState(config.elements);

  const getSubmitFunction = (elements: FormElementConfigs, onClick?: ClickHandler) =>
    (event: ClickEvent) => {
      const invalid = elements.reduce((result, element, index) => {
        return validators[index](element.props.value) || result;
      }, false);

      if (!invalid && onClick) {
        onClick(event);
      }
    };

  return (
    <form onSubmit={onSubmit}>
      {
        config.elements.map((element, index) => {
          return <FormElement invalid={invalidState[index]}
                              validate={validators[index]}
                              config={element}/>
        })
      }
      {
        config.buttons && config.buttons.map((button) => {
          const onClick = button.isSubmit ?
            getSubmitFunction(config.elements, button.props.onClick) :
            button.props.onClick;

          return <button {...button.props} onClick={onClick}/>
        })
      }
    </form>
  )
}

function onSubmit(event: React.FormEvent) {
  event.preventDefault();
}