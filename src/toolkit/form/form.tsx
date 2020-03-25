import React from 'react';
import {useInvalidState} from "./hooks/invalid-state";
import {FormConfig} from "./types/types";
import {onSubmit} from "./utils/on-submit";
import {FormElements} from "./components/form-elements";
import {FormButtons} from "./components/form-buttons";

export type FormProps = {
  config: FormConfig;
}

export function Form(props: FormProps) {
  const {config} = props;
  const {
    invalidState,
    validationFunctions
  } = useInvalidState(config.elements);

  return (
    <form onSubmit={onSubmit}>
      <FormElements elements={config.elements}
                    invalidState={invalidState}
                    validationFunctions={validationFunctions}/>
      <FormButtons validationFunctions={validationFunctions}
                   config={config}/>
    </form>
  )
}

