import React, {useEffect, useRef} from 'react';
import {FormElementType, TypedFormElementConfig} from "../types/element-types";
import {FDInput} from "../../input/input";
import {ElementValue} from "../utils/types";
import {useMounted} from "../hooks/mounted";
import {Delayer} from "../../../utils/delayer";

export type FormElementProps = {
  config: TypedFormElementConfig;
  invalid?: boolean;
  validate(key: string): boolean;
}

const FORM_ELEMENT_ERROR_MESSAGE = 'Wrong element type';

export function FormElement(props: FormElementProps) {
  const {config, invalid, validate} = props;
  const delayer = useRef(new Delayer()).current;
  const mounted = useMounted();

  useEffect(() => {
    if(mounted) {
      delayer.call(() => validate(config.key));
      return () => delayer.clear();
    }
  }, [config.props.value]);

  switch (config.type) {
    case FormElementType.TEXT_INPUT: {
      return <FDInput {...config.props} id={config.key} invalid={invalid}/>
    }
    case FormElementType.SELECT: {
      return <select {...config.props} />
    }
    default: {
      throw new Error(FORM_ELEMENT_ERROR_MESSAGE);
    }
  }
}