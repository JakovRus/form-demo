import React, {useEffect, useRef} from 'react';
import {useInvalidState} from "./hooks/invalid-state";
import {FormConfig} from "./types/types";
import {onSubmit} from "./utils/on-submit";
import {FormElements} from "./components/form-elements";
import {FormButtons} from "./components/form-buttons";
import {Delayer} from "../../utils/delayer";
import {useFormState} from "./hooks/form-state";
import {useMounted} from "./hooks/mounted";

export type FormProps = {
  config: FormConfig;
}

export function Form(props: FormProps) {
  const {config} = props;
  const delayer = useRef(new Delayer()).current;
  const {invalidState, validate} = useInvalidState(config.elements);
  const {state, setState} = useFormState(config.elements);
  const isMounted = useMounted();

  useEffect(() => {
    if(isMounted) {
      delayer.call(() => validate(state));
      return () => delayer.clear();
    }
  }, [state]);

  return (
    <form onSubmit={onSubmit}>
      <FormElements elements={config.elements}
                    state={state} setState={setState}
                    invalidState={invalidState}/>
      <FormButtons buttons={config.buttons}
                   validate={validate}
                   state={state}/>
    </form>
  )
}

