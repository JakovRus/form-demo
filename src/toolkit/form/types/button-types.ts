import React from 'react';

export type FormButtonConfig = {
  id: string;
  isSubmit: boolean;
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}