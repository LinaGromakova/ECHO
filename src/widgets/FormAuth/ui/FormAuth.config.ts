import type { HTMLInputTypeAttribute } from 'react';

export interface AuthFormData {
  username: string;
  email: string;
  password: string;
}
export interface InputConfig {
  type: HTMLInputTypeAttribute;
  name: keyof AuthFormData;
  label: string;
}

export const INPUTS_SIGN_IN: InputConfig[] = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];
export const INPUTS_SIGN_UP: InputConfig[] = [
  { type: 'text', name: 'username', label: 'Name' },
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];
