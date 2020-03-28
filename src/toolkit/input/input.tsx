import React from 'react';
import styles from './input.module.css';

export type FDInputProps =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> &
  {
    invalid?: boolean;
    id: string;
  }

function FDInputBase(props: FDInputProps) {
  const {invalid, id, ...rest} = props;
  const className = !invalid ? '' : styles.invalid;

  return (
    <input {...rest} className={className} data-id={id} />
  );
}

export const FDInput = React.memo<FDInputProps>(FDInputBase);