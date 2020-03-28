import React from 'react';
import {ValidationType} from "./validation";
import {FDInputProps} from "../../input/input";

export enum FormElementType {
  TEXT_INPUT = 'TEXT_INPUT',
  SELECT = 'SELECT',
}

export type FormElementConfig<T extends FormElementType> = {
  key: string;
  type: T;
  props: FormElementPropsType<T>;
  validation?: ValidationType;
}

export type FormElementPropsType<T extends FormElementType> = T extends
  FormElementType.TEXT_INPUT ?
  Omit<FDInputProps, 'invalid' | 'id'> :
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export type TypedFormElementConfig = FormElementConfig<FormElementType.TEXT_INPUT> |
  FormElementConfig<FormElementType.SELECT>;

export type FormElementConfigs = TypedFormElementConfig[];