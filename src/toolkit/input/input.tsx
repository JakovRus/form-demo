import React from 'react';
import styles from './input.module.css';

export type FDInputProps =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> &
  {
    invalid?: boolean;
  }

export function FDInput(props: FDInputProps) {
  const {invalid, ...rest} = props;
  const className = !invalid ? '' : styles.invalid;
  return (
    <input {...rest} className={className} />
  );
}