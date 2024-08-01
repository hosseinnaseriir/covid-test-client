'use client'
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import { FormHelperText } from '@mui/material';

import { Badge, Box, Chip, InputLabel, DefaultMuiSelect, Body2 } from '@design';


import type { SelectComponentProps } from './Select.types';
const SelectComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectComponentProps
> = (props, ref) => {
  const {
    children,
    multiple,
    label,
    sx,
    defaultValue,
    requiredStar,
    onChange,
    information,
    field,
    ...restProps
  } = props;
  const [value, setValue] = useState<any>(props.value);
  useEffect(() => {
    onChange && value && onChange(value);
  }, [onChange, value]);
  return (
    <Box sx={sx ?? {}}>
      {props.label && (
        <InputLabel
          sx={{
            display: 'flex',
            alignItems: 'center',
            ...(props.error ? { color: 'error.main' } : {}),
          }}
        >
          {props.label}
          {requiredStar && (
            <Body2 color='error' sx={{ px: 0.5 }} component='span'>
              *
            </Body2>
          )}
        </InputLabel>
      )}
      <DefaultMuiSelect
        {...restProps}
        ref={ref}
        multiple={!!multiple}
        sx={{ flexBasis: '49.24%' }}
        value={value ?? props.placeholder}
        label={defaultValue as string}
        onChange={(event) => {
          setValue(event.target.value);
          if (field) {
            field.onChange(event);
          }
        }}
        renderValue={(selected) =>
          value ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: (theme) => theme.palette.background.default,
                position: 'relative',
                zIndex: 2,
              }}
            >
              {!multiple ? (
                <>{selected}</>
              ) : props.chip ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    maxHeight: 20,
                  }}
                >
                  {(selected as []).map((selectedValue) => (
                    <Chip
                      size='small'
                      onMouseDown={(event) => event.stopPropagation()}
                      color='primary'
                      onDelete={() => {
                        setValue((prev: Array<any>) =>
                          prev.filter((v) => v !== selectedValue)
                        );
                      }}
                      key={selectedValue}
                      label={selectedValue}
                    />
                  ))}
                </Box>
              ) : (
                <>
                  <Body2>{label}</Body2>
                  <Badge
                    color='primary'
                    sx={{ mr: 2 }}
                    badgeContent={(selected as []).length}
                  />
                </>
              )}
            </Box>
          ) : (
            <Body2 fontWeight={400} color='text.secondary'>
              {props.placeholder}
            </Body2>
          )
        }
      >
        {children}
      </DefaultMuiSelect>
      {props.helperText ? (
        <FormHelperText sx={props.error ? { color: 'error.main' } : {}}>
          {props.helperText}
        </FormHelperText>
      ) : null}
    </Box>
  );
};

export const Select = forwardRef(SelectComponent);
