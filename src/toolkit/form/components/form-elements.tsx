import React, {ChangeEvent, useCallback} from "react";
import {FormElementConfigs} from "../types/element-types";
import {FormElement} from "./form-element";
import {FormState, InvalidState} from "../utils/get-initial-state";

type FormElementsProps = {
  elements: FormElementConfigs;
  invalidState: InvalidState;
  state: FormState;
  setState(key: string, value: string): void;
}

const MISSING_DATA_ID_MESSAGE = 'Missing data-id attribute';

export function FormElements(props: FormElementsProps) {
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.getAttribute('data-id');

    if(!key) {
      throw new Error(MISSING_DATA_ID_MESSAGE)
    }

    props.setState(key, event.target.value);
  }, [props.setState]);

  const elements = props.elements.map((element) => {
    element.props.value = props.state[element.key];
    element.props.onChange = onChange;

    return <FormElement invalid={props.invalidState[element.key]}
                        config={element} key={element.key}/>
  });

  return <>{elements}</>;
}