import React from "react";
import {ValidationFunction} from "../hooks/invalid-state";
import {FormElementConfigs} from "../types/element-types";
import {FormElement} from "../form-element";

type FormElementsProps = {
  elements: FormElementConfigs;
  invalidState: boolean[];
  validationFunctions: ValidationFunction[];
}

export function FormElements(props: FormElementsProps) {
  const elements = props.elements.map((element, index) => {
    return <FormElement invalid={props.invalidState[index]}
                        validate={props.validationFunctions[index]}
                        config={element} key={element.id}/>
  });

  return <>{elements}</>;
}