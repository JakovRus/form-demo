import React from 'react';
import {FormElementType, TypedFormElementConfig} from "../types/element-types";
import {FDInput} from "../../input/input";

export type FormElementProps = {
  config: TypedFormElementConfig;
  invalid?: boolean;
}

const FORM_ELEMENT_ERROR_MESSAGE = 'Wrong element type';

export function FormElement(props: FormElementProps) {
  const {config, invalid} = props;

  switch (config.type) {
    case FormElementType.TEXT_INPUT: {
      return <FDInput {...config.props} invalid={invalid}/>
    }
    case FormElementType.SELECT: {
      return <select {...config.props} />
    }
    default: {
      throw new Error(FORM_ELEMENT_ERROR_MESSAGE);
    }
  }
}