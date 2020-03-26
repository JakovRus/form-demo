import React from "react";
import {FormElementConfigs} from "../types/element-types";
import {FormElement} from "./form-element";
import {FormState, InvalidState} from "../utils/get-initial-state";

type FormElementsProps = {
  elements: FormElementConfigs;
  invalidState: InvalidState;
  state: FormState;
  setState(key: string, value: string): void;
}

export function FormElements(props: FormElementsProps) {
  const elements = props.elements.map((element) => {
    element.props.value = props.state[element.key];
    element.props.onChange = (event: any) => {
      props.setState(element.key, event.target.value);
    };

    return <FormElement invalid={props.invalidState[element.key]}
                        config={element} key={element.key}/>
  });

  return <>{elements}</>;
}