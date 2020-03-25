import React from 'react';

export type FormButtonConfig = {
  isSubmit: boolean,
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}