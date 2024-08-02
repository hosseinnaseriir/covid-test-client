import { ReactNode } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { AutocompleteProps } from '@design';

import { InputTextProps } from '..';

export type AutoCompleteOption = {
  id: string;
  icon?: ReactNode;
  color?: ReactNode;
  avatar?: ReactNode;
  label: ReactNode;
  value: ReactNode;
} | null;

export interface AutoCompleteType
  extends Omit<AutocompleteProps<any, any, any, any>, 'renderInput'> {
  options: Array<AutoCompleteOption>;
  label: InputTextProps['label'];
  requiredStar?: InputTextProps['requiredStar'];
  information?: InputTextProps['information'];
  error?: InputTextProps['error'];
  helperText?: InputTextProps['helperText'];
  field?: ControllerRenderProps<any, any>;
  InputProps?: InputTextProps;
}
