import { forwardRef, ForwardRefRenderFunction, useId } from 'react';
import { DefaultMuiAutocomplete, InputText } from '@design';
import { AutoCompleteType } from './types';

export const MuiAutoComplete: ForwardRefRenderFunction<
  HTMLInputElement,
  AutoCompleteType
> = (props, ref) => {
  const {
    options,
    label,
    requiredStar,
    information,
    field,
    error,
    helperText,
    ...restProps
  } = props;
  const customInputDemo = useId();

  return (
    <DefaultMuiAutocomplete
      options={options ?? []}
      ref={ref}
      {...restProps}
      id={customInputDemo}
      clearIcon={null}
      ChipProps={{
        size: 'small',
        color: 'primary',
      }}
      value={props.value ?? field?.value ?? []}
      onChange={(_event, _value, reason) => {
        field
          ? field?.onChange(_value)
          : props.onChange?.(_event, _value, reason);
      }}
      isOptionEqualToValue={(option, _value) => {
        return option.id === _value.id;
      }}
      renderInput={(params) => (
        <InputText
          error={error}
          helperText={helperText}
          information={information}
          requiredStar={!!requiredStar}
          label={label}
          ref={params.InputProps.ref}
          type='text'
          {...params}
          {...props.InputProps}
        />
      )}
    />
  );
};
export const AutoComplete = forwardRef(MuiAutoComplete);
