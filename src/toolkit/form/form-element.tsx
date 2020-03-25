import React from 'react';
import {withFormValidation} from "./hocs/with-validation";
import {FormElementType, TypedFormElementConfig} from "./types/element-types";

export type FormElementProps = {
  config: TypedFormElementConfig;
}

const FORM_ELEMENT_ERROR_MESSAGE = 'Wrong element type';

function FormElementBase(props: FormElementProps) {
  const {config} = props;

  switch (config.type) {
    case FormElementType.TEXT_INPUT: {
      return <input {...config.props}/>
    }
    case FormElementType.SELECT: {
      return <select {...config.props} />
    }
    default: {
      throw new Error(FORM_ELEMENT_ERROR_MESSAGE);
    }
  }
}

export const FormElement = withFormValidation(FormElementBase);