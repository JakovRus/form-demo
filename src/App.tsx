import React from 'react';
import './App.css';
import {FormConfig} from "./toolkit/form/types/types";
import {FormElementType} from "./toolkit/form/types/element-types";
import {ValidationType} from "./toolkit/form/types/validation";
import {Form} from "./toolkit/form/form";

function App() {
  const config = getConfig();
  return (
    <div className="App">
      <Form config={config}/>
    </div>
  );
}

export default App;

function getConfig(): FormConfig {

  return {
    elements: [
      {
        key: 'value',
        type: FormElementType.TEXT_INPUT,
        props: {
          placeholder: 'INPUT',
        },
        validation: ValidationType.NUMBER,
      }
    ],
    buttons: [
      {
        id: '1',
        isSubmit: true,
        props: {
          children: 'submit',
          onClick: () => {
            console.log('submit')
          }
        }
      }
    ]
  }
}