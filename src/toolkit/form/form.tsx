import React from 'react';
import {useInvalidState} from "./hooks/invalid-state";
import {FormConfig} from "./types/types";
import {onSubmit} from "./utils/on-submit";
import {FormElements} from "./components/form-elements";
import {FormButtons} from "./components/form-buttons";
import {useFormState} from "./hooks/form-state";
import {useValidation} from "./hooks/validation";

export type FormProps = {
  config: FormConfig;
}

export function Form(props: FormProps) {
  const {config} = props;
  const {invalidState, setInvalid} = useInvalidState(config.elements);
  const {state, setState} = useFormState(config.elements);

  const {validate, validateField} = useValidation(config.elements, setInvalid);

  return (
    <form onSubmit={onSubmit}>
      <FormElements elements={config.elements}
                    state={state} setState={setState}
                    validate={validateField}
                    invalidState={invalidState}/>
      <FormButtons buttons={config.buttons}
                   validate={validate}
                   state={state}/>
    </form>
  )
}

