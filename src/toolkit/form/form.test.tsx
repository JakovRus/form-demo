import React from 'react';
import {render, fireEvent, wait} from "@testing-library/react";
import {Form} from "./form";
import {FormConfig} from "./types/types";
import {ValidationType} from "./types/validation";
import {FormElementType} from "./types/element-types";

const config: FormConfig = {
  elements: [
    {
      key: 'name',
      type: FormElementType.TEXT_INPUT,
      props: {
        placeholder: 'name',
      },
      validation: ValidationType.REQUIRED,
    },
    {
      key: 'surname',
      type: FormElementType.TEXT_INPUT,
      props: {
        placeholder: 'surname',
      },
    },
    {
      key: 'years',
      type: FormElementType.TEXT_INPUT,
      props: {
        placeholder: 'years',
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
};

describe('Form component', () => {
  test('renders right elements', () => {
    const {getByPlaceholderText} = render(<Form config={config} />);

    expect(getByPlaceholderText('name')).toBeTruthy();
    expect(getByPlaceholderText('surname')).toBeTruthy();
    expect(getByPlaceholderText('years')).toBeTruthy();
  });

  test('validates state', async () => {
    const onClick = jest.fn();
    config.buttons![0].props.onClick = onClick;

    const {getByText, getByPlaceholderText} = render(<Form config={config} />);

    fireEvent.click(getByText('submit'));
    expect(onClick).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'James'}});
    fireEvent.change(getByPlaceholderText('years'), {target: {value: '21'}});
    fireEvent.click(getByText('submit'));
    expect(onClick).toBeCalled();
  });
});
