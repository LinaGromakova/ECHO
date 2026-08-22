import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { AuthFormData } from '../ui/FormAuth.config';

const updateInputForm = (
  e: ChangeEvent<HTMLInputElement>,
  field: keyof AuthFormData,
  setState: Dispatch<SetStateAction<AuthFormData>>,
) => {
  setState((prev) => ({ ...prev, [field]: e.target.value }));
};

export default updateInputForm;
