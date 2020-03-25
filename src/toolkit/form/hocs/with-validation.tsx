import React, {useEffect} from 'react';
import {TypedFormElementConfig} from "../types/element-types";
import Timeout = NodeJS.Timeout;

const VALIDATION_DELAY = 500;

type WrappedComponentProps = {
  config: TypedFormElementConfig;
  invalid: boolean;
}

type ComponentProps = {
  validate(value?: string | string[] | number): boolean;
}

export function withFormValidation(WrappedComponent: React.ComponentType<WrappedComponentProps>) {
  let timer: Timeout;

  return (props: WrappedComponentProps & ComponentProps) => {
    const {validate, config, invalid} = props;

    useEffect(() => {
      if (!timer) {
        timer = setTimeout(() => validate(config.props.value), VALIDATION_DELAY);
      }

      return () => clearTimeout(timer);
    }, [config.props.value]);

    return (
      <WrappedComponent config={config} invalid={invalid}/>
    )
  }
}